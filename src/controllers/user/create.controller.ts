import { Request, Response } from "express";
import { CreateUserUseCase } from "../../useCases/user/create.useCase";

export class CreateUserController {
  constructor(private createUserUseCases: CreateUserUseCase) {}

  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;

    try {
      await this.createUserUseCases.execute({ name, email, password });

      return response.status(201).send();
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        code: 400,
        message: error.message.toString() || "Unexpected error.",
      });
    }
  }
}
