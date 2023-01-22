import { IUserRepository } from "../../interfaces/repositories/IUserRepository";
import { ICreateUserRequestDTO } from "../../dtos/user/create.dto";
import { UserEntity } from "../../entities/user.entity";
import { IMailProvider } from "../../providers/IMailProvider";

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExist = await this.userRepository.findByEmail(data.email);

    if (userAlreadyExist) throw new Error("User Already exists.");

    const user = new UserEntity(data);

    await this.userRepository.save(user);

    await this.mailProvider.sendMessage({
      to: {
        email: data.email,
        name: data.name,
      },
      from: {
        email: data.email,
        name: data.name,
      },
      subject: "Welcome to my API!",
      body: "<h1 style='text-align: center;'>welcome to my API created in solid.</h1>",
    });
  }
}
