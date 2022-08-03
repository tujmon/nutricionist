import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetAppointmentService } from "../services/GetAppointmentService";

export class GetAppointmentController {
  async handle(request: Request, response: Response) {
    const getAppointmentUseCase = container.resolve(GetAppointmentService);
    const appointment = await getAppointmentUseCase.execute(request);

    return response.json(appointment);
  }
}
