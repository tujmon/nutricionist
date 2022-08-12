import { Router } from "express";

import { CreateFoodController } from "../modules/Food/controllers/CreateFoodControllers";
import { GetFoodController } from "../modules/Food/controllers/GetFoodControllers";
import { ListFoodController } from "../modules/Food/controllers/ListFoodControllers";

const FoodRoutes = Router();

const createFoodController = new CreateFoodController();
const getFoodController = new GetFoodController();
const listFoodController = new ListFoodController();

FoodRoutes.post("", createFoodController.handle);
FoodRoutes.get("/:name", getFoodController.handle);
FoodRoutes.get("", listFoodController.handle);

export { FoodRoutes };
