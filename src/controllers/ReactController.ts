import { Response, Request } from "express";
import { inject } from "inversify";
import { interfaces, httpGet, controller } from "inversify-express-utils";
import { TemplateGenerator } from "../types";

@controller("/admin")
class ReactController implements interfaces.Controller {
  @inject("TemplateGenerator")
  private readonly _templateGenerator: TemplateGenerator;

  @httpGet("/")
  private async index() {
    try {
      let html = await this._templateGenerator.getHtmlWithLayout(
        "admin",
        "react"
      );
      return html;
    } catch (err) {
      return {
        error: "Something went wrong..",
      };
    }
  }

  @httpGet("/hello")
  private test() {
    return "ok";
  }
}

export default ReactController;
