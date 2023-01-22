import mongoose from "mongoose";

const createConnection = (
  dbName: string,
  host: string = process.env.MONGO_CONNECTION as string
) => mongoose.createConnection(host, { dbName });

export class ConnectRepo {
  carts = createConnection("user_db");
}
