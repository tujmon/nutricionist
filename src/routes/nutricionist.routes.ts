import { Router } from "express";

import { CreateNutricionistController } from "../modules/Nutricionist/controllers/CreateNutricionistController";
import { GetNutricionistController } from "../modules/Nutricionist/controllers/GetNutricionistController";
import { ListNutricionistController } from "../modules/Nutricionist/controllers/ListNutricionistControllers";

const NutricionistRoutes = Router();

const createNutricionistController = new CreateNutricionistController();
const getNutricionistController = new GetNutricionistController();
const listNutricionistController = new ListNutricionistController();

NutricionistRoutes.post("", createNutricionistController.handle);
NutricionistRoutes.get("/:email", getNutricionistController.handle);
NutricionistRoutes.get("", listNutricionistController.handle);

export { NutricionistRoutes };
