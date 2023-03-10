import { UserEntity } from "../../entities/user.entity";

export interface IUserRepository {
  findByEmail(email: string): Promise<UserEntity>;
  save(user: UserEntity): Promise<void>;
}
