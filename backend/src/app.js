// app
const koa = require("koa");
const app = new koa();

// router
const Router = require("koa-router");
const router = new Router();

// cors
const cors = require("@koa/cors");
app.use(
  cors({
    // origin: 'https://www.weblite.me:3000'
  })
);

// bodyParser
// const bodyParser = require('koa-bodyparser')
// app.use(bodyParser())

// db
const database = require("./database/dbConnector");
database.connect("issues_db");

// app.use(async (ctx, next) => {
//   try {
//     await next();
//   } catch (error) {
//     ctx.status = error.status || 500;
//     ctx.body = error.message;
//     ctx.app.emit("error", error, ctx);
//   }
// });

require("./router")({ router });
app.use(router.routes());
app.use(router.allowedMethods());

const port = 3002;
const server = app.listen(port);

module.exports = server;
