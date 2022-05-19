export interface InvoiceRepository {
  getAll(): Promise<any[]>;
  add(price: number): Promise<any>;
  findOne(id: number): Promise<any[]>;
}