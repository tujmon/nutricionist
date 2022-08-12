import { Router } from "express";

import { CreateAppointmentController } from "../modules/Appointment/controllers/CreateAppointmentControllers";
import { GetAppointmentController } from "../modules/Appointment/controllers/GetAppointmentController";
import { ListAppointmentController } from "../modules/Appointment/controllers/ListAppointmentControllers";

const AppointmentRoutes = Router();

const createAppointmentController = new CreateAppointmentController();
const getAppointmentController = new GetAppointmentController();
const listAppointmentController = new ListAppointmentController();

AppointmentRoutes.post("", createAppointmentController.handle);
AppointmentRoutes.get(":/dateAndTime", getAppointmentController.handle);
AppointmentRoutes.get("", listAppointmentController.handle);

export { AppointmentRoutes };
