import Koa from 'koa';
import Router from 'koa-router';
import BodyParser from 'koa-bodyparser';
import {createUser, getUser} from '../../controller/UserController.js'


export default class ApplicationDriver {

  ApplicationDriver(){}

  httpServer;

  async start(){
    const app = new Koa();
    const router = new Router();
    const bodyParser = new BodyParser();

    router.post("/user", createUser)
    router.get("/user/:id", getUser)


    app.use(bodyParser);
    app.use(router.routes());

    // No error processing
    await new Promise((resolve, reject) => {
      this.httpServer = app.listen(3000, resolve);
    })
  }

  // No error processing
  async stop(){
    return new Promise((resolve, reject) => {
      this.httpServer.close((error) => {
        resolve();
      });
    })
  }

}