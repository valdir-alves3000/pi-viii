export class User {
  id?: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  cpf: string;
  admin: boolean;
}

export class Message {
  phone: string;
  date: Date;
}
