import { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

UserSchema.pre("save", async function hashPassword(next) {
  if (!this.isModified("password")) next();

  this.password = await bcrypt.hash(this.password, 10);
});

UserSchema.methods = {
  compareHash(hash: string) {
    return bcrypt.compare(hash, this.password);
  },
};

UserSchema.statics = {
  generateToken({ id }) {
    return jwt.sign({ id }, process.env.KEY_TOKEN, {
      expiresIn: 86400,
    });
  },
};
