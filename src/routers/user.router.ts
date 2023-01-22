import { Request, Response, Router } from "express";
import { createUserController } from "../useCases/user";

export const userRouter = Router();

userRouter.post("/", (request: Request, response: Response) => {
  return createUserController.handle(request, response);
});
