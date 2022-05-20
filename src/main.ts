import "reflect-metadata";
import { NextFunction, Request, Response } from "express";
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
  app.engine("handlebars", engine());

  app.set("view engine", "handlebars");
  app.set("views", __dirname + "/views");
})

let app = server.build();

app.listen(3000, () => console.log('Server started...'));

export default app;