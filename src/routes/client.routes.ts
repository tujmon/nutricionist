import { Router } from "express";

import { CreateClientController } from "../modules/Client/controllers/CreateClientController";
import { GetClientController } from "../modules/Client/controllers/getClientController";
import { ListClientController } from "../modules/Client/controllers/ListClientControllers";

const ClientRoutes = Router();

const createClientController = new CreateClientController();
const getClientController = new GetClientController();
const listClientController = new ListClientController();

ClientRoutes.post("", createClientController.handle);
ClientRoutes.get("/:email", getClientController.handle);
ClientRoutes.get("", listClientController.handle);

export { ClientRoutes };
