import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetAppointmentService } from "../services/GetAppointmentService";

export class ListAppointmentController {
  async handle(request: Request, response: Response) {
    const listAppointmentUseCase = container.resolve(GetAppointmentService);
    const appointment = await listAppointmentUseCase.execute(request);

    return response.json(appointment);
  }
}
