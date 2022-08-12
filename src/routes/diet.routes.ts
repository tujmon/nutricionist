import { Router } from "express";

import { CreateDietController } from "../modules/Diet/controllers/CreateDietController";
import { GetDietController } from "../modules/Diet/controllers/GetDietController";
import { ListDietController } from "../modules/Diet/controllers/ListDietControllers";

const DietRoutes = Router();

const createDietController = new CreateDietController();
const getDietController = new GetDietController();
const listDietController = new ListDietController();

DietRoutes.post("", createDietController.handle);
DietRoutes.get("/:clientId", getDietController.handle);
DietRoutes.get("", listDietController.handle);

export { DietRoutes };
