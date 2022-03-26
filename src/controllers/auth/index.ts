import { Request, Response} from 'express';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('../../../config.json');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {clientId, clientSecret, redirectUri} = config.discord;
import axios from 'axios';
import url from 'url';
export async function authDiscordRedirectController(req: Request, res: Response){
	const {code}=req.query;
	if(code){
		try{
			console.log(code.toString());
			const formData = new url.URLSearchParams({
				client_id: '952104325587550248',
				client_secret: 'RmK5wBZbKd9DbppqC90iRsce3w-_53AM',
				grant_type: 'authorization_code',
				code: code.toString(),
				redirect_uri: redirectUri
			});
			console.log(formData);
			const response = await axios.post('https://discord.com/api/v8/oauth2/token',
				formData.toString(),
				{
					headers: { 
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				});
			const {access_token, refresh_token}=response.data;
			console.log(access_token, refresh_token);
			res.send(200);
		}catch(err){
			console.error(err);
			res.sendStatus(400);
		}
	}
}