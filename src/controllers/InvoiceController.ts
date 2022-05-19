import { inject } from "inversify";
import { interfaces, httpGet, controller, queryParam, requestParam } from "inversify-express-utils";
import { InvoiceRepository } from "../types";

@controller('/invoice')
class InvoiceController implements interfaces.Controller {
  @inject('InvoiceRepository') private readonly _ir: InvoiceRepository;

  @httpGet('/')
  private async index() {
    return this._ir.getAll();
  }

  @httpGet('/new')
  private async create(@queryParam('price') price: number) {
    return await this._ir.add(price);
  }

  @httpGet('/:id')
  private async getOneInvoice(@requestParam('id') id: number) {
    return this._ir.findOne(id);
  }

  @httpGet('/all')
  private async getAll() {
    return this._ir.getAll();
  }
}

export default InvoiceController;