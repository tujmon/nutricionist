import { injectable } from "tsyringe";

import { prismaClient } from "../../../database/prismaClient";

@injectable()
export class ListDietsService {
  async execute() {
    const diet = await prismaClient.diet.findMany({
      include: {
        client: true,
        meals: {
          include: {
            meal: true,
          },
        },
      },
    });

    return diet;
  }
}
