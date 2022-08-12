import { Router } from "express";

import { CreateMealController } from "../modules/Meal/controllers/CreateMealControllers";
import { GetMealController } from "../modules/Meal/controllers/GetMealController";
import { ListMealController } from "../modules/Meal/controllers/ListMealControllers";

const MealRoutes = Router();

const createMealController = new CreateMealController();
const getMealController = new GetMealController();
const listMealController = new ListMealController();

MealRoutes.post("", createMealController.handle);
MealRoutes.get("/:name", getMealController.handle);
MealRoutes.get("", listMealController.handle);

export { MealRoutes };
