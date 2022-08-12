import { Router } from "express";

import { CreateAvaliationController } from "../modules/Avaliation/controllers/CreateAvaliationControllers";
import { GetAvaliationController } from "../modules/Avaliation/controllers/GetAvaliationController";
import { ListAvaliationController } from "../modules/Avaliation/controllers/ListAvaliationControllers";

const AvaliationRoutes = Router();

const createAvaliationController = new CreateAvaliationController();
const getAvaliationController = new GetAvaliationController();
const listAvaliationController = new ListAvaliationController();

AvaliationRoutes.post("", createAvaliationController.handle);
AvaliationRoutes.get("/:appointmentId", getAvaliationController.handle);
AvaliationRoutes.get("", listAvaliationController.handle);

export { AvaliationRoutes };
