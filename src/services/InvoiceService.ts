import { injectable, inject } from "inversify";
import { InvoiceRepository } from "../types";
import connection from "../db-setup";

interface Invoice {
  id: number;
  price: string;
}

@injectable()
class InvoiceService implements InvoiceRepository {

  public async getAll(): Promise<Invoice[]> {
    let [rows, _] = await connection.query('select * from invoices');
    return (rows as Array<any>).map<Invoice>(r => ({ id: r.id, price: r.price }));
  }

  public async add(price: number): Promise<any> {
    let [rows, _] = await connection.query('insert into invoices (price) values (?)', [price]);
    return rows;
  }

  public async findOne(id: number): Promise<Invoice[]> {
    let [rows, _]: [Array<any>, any] = await connection.query('select * from invoices where id = ?', [id]);

    if (rows.length > 0) {
      return rows[0];
    }

    return [];
  }
}

export { InvoiceService };