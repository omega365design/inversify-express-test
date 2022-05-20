import { Response, Request } from "express";
import { inject } from "inversify";
import { interfaces, httpGet, controller, queryParam, requestParam, request, response } from "inversify-express-utils";
import { TemplateGenerator } from "../types";

@controller('/')
class HomeController implements interfaces.Controller {
  @inject('TemplateGenerator') private readonly _templateGenerator: TemplateGenerator;
  
  @httpGet('/')
  private async index() {
    try {
      let html = await this._templateGenerator.getHtml('home');
      return html;
    } catch (err) {
      return {
        error: "Something went wrong.."
      }
    }
  }
}

export default HomeController;