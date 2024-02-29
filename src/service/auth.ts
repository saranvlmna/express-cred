import { User } from "../database/connection";

export class AuthService {
  constructor() {}

  async createUser(data: any) {
    if (!data.name || !data.phone) throw Error("params missing");
    return await User.create(data);
  }

  async listUser(data: any) {
    return await User.findAll({ raw: true });
  }
}
