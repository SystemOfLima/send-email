import { v4 as uuidv4 } from "uuid";
import { ObjectId } from "mongoose";

export class UserEntity {
  public readonly _id: ObjectId;

  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<UserEntity, "_id">) {
    Object.assign(this, props);
  }
}
