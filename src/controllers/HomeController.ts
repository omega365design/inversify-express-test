import { inject } from "inversify";
import { interfaces, httpGet, controller, queryParam, requestParam } from "inversify-express-utils";
import { InvoiceRepository } from "../types";

@controller('/')
class HomeController implements interfaces.Controller {
  @inject('InvoiceRepository') private readonly _ir: InvoiceRepository;

  @httpGet('/')
  private async index() {
    return "Hello!"
  }
}

export default HomeController;