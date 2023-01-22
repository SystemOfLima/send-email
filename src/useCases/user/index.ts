import { CreateUserController } from "../../controllers/user/create.controller";
import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { UserMongoDB } from "../../repositories/MongoDB/implementations/userMongoDB";
import { CreateUserUseCase } from "./create.useCase";

const mailtrapMailProvier = new MailtrapMailProvider();
const userMongoDB = new UserMongoDB();

const createUseUseCases = new CreateUserUseCase(
  userMongoDB,
  mailtrapMailProvier
);

const createUserController = new CreateUserController(createUseUseCases);

export { createUseUseCases, createUserController };
