import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAppointmentService } from "../services/CreateAppointmentService";

export class CreateAppointmentController {
  async handle(request: Request, response: Response) {
    const { date, time, status, client_id } = request.body;

    const createNutricionistUseCase = container.resolve(
      CreateAppointmentService
    );

    const appointment = await createNutricionistUseCase.execute({
      date,
      time,
      status,
      client_id,
    });

    return response.json(appointment);
  }
}
