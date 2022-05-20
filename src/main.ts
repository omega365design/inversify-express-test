import "reflect-metadata";
import { NextFunction, Request, Response, static as assets } from "express";
import { Container, inject, injectable } from "inversify";
import { InversifyExpressServer, interfaces } from "inversify-express-utils";
import { engine } from "express-handlebars";

// Controllers/Routes
import "./controllers";

// IOC types
import { TemplateGenerator } from "./types";

// Services
import HandlebarsGenerator from "./services/HandlebarsGenerator";

// IOC
let container = new Container();

container.bind<TemplateGenerator>("TemplateGenerator").to(HandlebarsGenerator);

let server = new InversifyExpressServer(
  container
);

server.setConfig((app) => {
  app.engine(".hbs", engine({
    extname: ".hbs"
  }));

  app.set("view engine", ".hbs");
  app.set("views", __dirname + "/views");

  app.use("/assets", assets(__dirname + "/views/assets"));
})

let app = server.build();

app.listen(3000, () => console.log('Server started...'));

export default app;