import { AddressInfo } from 'net';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import cors from 'koa2-cors';
import staticFiles from 'koa-static';
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
      // tslint:disable-next-line:no-console
      console.error(error);
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
    console.log(`Server started on port ${(listener.address() as AddressInfo).port}`);
  });
} catch (e) {
  // tslint:disable-next-line:no-console
  console.error(e);
}
