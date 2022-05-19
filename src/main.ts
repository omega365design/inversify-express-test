import "reflect-metadata";
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import { InvoiceService } from "./services/InvoiceService";
import { Connection } from "mysql2";

// Controllers/Routes
import "./controllers/HomeController";
import "./controllers/InvoiceController";
import { InvoiceRepository } from "./types";

// DB setup
import connection from "./db-setup";

// IOC
let container = new Container();
container.bind<InvoiceRepository>("InvoiceRepository").to(InvoiceService);

let server = new InversifyExpressServer(container);

let app = server.build();

app.listen(3000, () => console.log('Server started...'));