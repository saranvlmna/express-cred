import { User } from "../database/connection";

export class AuthService {
  constructor() {}

  async createUser(data: any) {
   return await User.create(data);
  }
}
