import { ServerService } from "../service/server";
const serverService = new ServerService();
export class ServerController {
  constructor() {}

  async heyServer(req: any, res: any) {
    const response = await serverService.heyServer();
    res.send(response);
  }
}
