import Koa from 'koa';
import Router from 'koa-router';
import BodyParser from 'koa-bodyparser';
import {createUser} from './src/controller/UserController.js'

const app = new Koa();
const router = new Router();
const bodyParser = new BodyParser();

router.post("/user", createUser)

app
  .use(bodyParser)
  .use(router.routes())

app.listen(3000)
