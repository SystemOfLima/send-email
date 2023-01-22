import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { userRouter } from "./routers/user.router";

class Application {
  public server;

  constructor() {
    this.server = express();
    this.middleware();
    this.router();
  }

  async middleware() {
    this.server.use(cors());
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({ extended: false }));
  }

  async router() {
    this.server.use("/user", userRouter);
  }
}

const App = new Application().server;

export { App };
