import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAppointmentService } from "../services/CreateAppointmentService";

export class CreateAppointmentController {
  async handle(request: Request, response: Response) {
    const { dateAndTime, avaliation, clientId } = request.body;

    const createAppointmentUseCase = container.resolve(
      CreateAppointmentService
    );

    const appointment = await createAppointmentUseCase.execute({
      dateAndTime,
      avaliation,
      clientId,
    });

    return response.json(appointment);
  }
}
