import { Request, Response} from 'express';
const os = require('os');

export async function uptimeController(req: Request, res: Response){
	console.log(os.uptime());
	res.send({
	'uptime':'Days: '+String(Math.floor(os.uptime()/60/60/24))+
    ', Hours: '+String(Math.floor(os.uptime()/60/60)-Math.floor(os.uptime()/60/60/24)*24)+
    ', Minutes: '+
    String(Math.floor(os.uptime()/60)-Math.floor(os.uptime()/60/60)*60)+
    ', Seconds: '+
    String(Math.floor(os.uptime())-Math.floor(os.uptime()/60)*60)});
}