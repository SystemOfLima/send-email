interface IMail {
  email: string;
  name: string;
}

export interface IMessage {
  to: IMail;
  from: IMail;
  subject: string;
  body: string;
}

export interface IMailProvider {
  sendMessage(message: IMessage): Promise<void>;
}
