import { User } from "../database/connection";

export class AuthService {
  constructor() { }

  async createUser(data: any) {
    console.log(data);
    await User.create(data);
  }
}
