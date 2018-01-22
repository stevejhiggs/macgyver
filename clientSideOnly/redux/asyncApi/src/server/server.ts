import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as Router from 'koa-router';
import * as cors from 'koa2-cors';
import * as staticFiles from 'koa-static';
import * as path from 'path';

function createServer() {
  const app = new Koa();
  app.use(bodyParser());
  app.use(cors());
  app.use(staticFiles(path.join(__dirname, 'public')));

  const router = new Router();
  router.get('/api/animals', async (ctx) => {
    ctx.body =  [
      {id: 1, name: 'cat'},
      {id: 2, name: 'dog'},
      {id: 3, name: 'fish'}
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
    // tslint:disable-next-line:no-console
    console.log(`Server started on port ${listener.address().port}`);
  });
} catch (e) {
  // tslint:disable-next-line:no-console
  console.error(e);
}
