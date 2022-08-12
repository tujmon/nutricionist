import { Router } from "express";

import { cors } from "../middlewares/cors";
import { AppointmentRoutes } from "./appointment.routes";
import { AvaliationRoutes } from "./avaliation.routes";
import { ClientRoutes } from "./client.routes";
import { DietRoutes } from "./diet.routes";
import { FoodRoutes } from "./food.routes";
import { MealRoutes } from "./meal.routes";
import { NutricionistRoutes } from "./nutricionist.routes";

const router = Router();
router.use(cors);
router.use("/appointment", AppointmentRoutes);
router.use("/avaliation", AvaliationRoutes);
router.use("/client", ClientRoutes);
router.use("/diet", DietRoutes);
router.use("/food", FoodRoutes);
router.use("/meal", MealRoutes);
router.use("/nutricionist", NutricionistRoutes);

export { router };
