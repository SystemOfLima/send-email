import { UserEntity } from "../../../entities/user.entity";
import { IUserRepository } from "../../../interfaces/repositories/IUserRepository";
import { ConnectRepo } from "../connectMongoDB";
import { UserSchema } from "../schemas/user.schema";

export class UserMongoDB extends ConnectRepo implements IUserRepository {
  public model = this.carts.model("users", UserSchema);

  constructor() {
    super();
  }

  async findByEmail(email: string): Promise<UserEntity> {
    return await this.model.findOne({ email });
  }

  async save(user: UserEntity): Promise<void> {
    await this.model.create(user);
  }
}
