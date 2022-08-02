import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAppointmentsService } from "../services/ListAppointmentService";

export class ListAppointmentController {
  async handle(request: Request, response: Response) {
    const listAppointmentUseCase = container.resolve(ListAppointmentsService);

    const Appointment = await listAppointmentUseCase.execute();

    return response.json(Appointment);
  }
}
