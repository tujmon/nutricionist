import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";

@injectable()
export class ListMealsService {
  async execute() {
    const meal = await prismaClient.meal.findMany();

    return meal;
  }
}
