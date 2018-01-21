const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors');
const Router = require('koa-router');

function createServer() {
  const app = new Koa();
  app.use(bodyParser());
  app.use(cors());

  const router = new Router();
  router.get('/', async (ctx) => {
    ctx.body =  [
      {id:1, name: 'cat'},
      {id:2, name: 'dog'},
      {id:3, name: 'fish'}
    ];
  });

  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {

      const error = {
        errorType: 'UNHANDLED_ERROR',
        message: err.message,
        stack: err.stack
      };

      ctx.body = error;
      ctx.log.error(error);
    }
  });

  app
  .use(router.routes())
  .use(router.allowedMethods());

  return app;
}

const server = createServer();
try {
  const listener = server.listen(8000, () => {
    console.log(`Server started on port ${listener.address().port}`);
  });
} catch (e) {
  console.error(e);
}

