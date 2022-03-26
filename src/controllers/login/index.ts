import { Request, Response} from 'express';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('../../../config.json');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {clientId, clientSecret, redirectUri} = config.discord;
export async function loginKimaneController(req: Request, res: Response){
    
}
