// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('../config.json');
const {clientId, clientSecret, redirectUri} = config.discord;
import express, {Request, Response} from 'express';
import axios from 'axios';
import url from 'url';
import routes from './routes';

const port = config.api.port || 4000;


async function main() {
	const app = express();
	app.use('/',routes);
	app.listen(port, ()=>console.log('Running on port '+port));
}

main();

const accessToken = '';
const refreshToken = '';

// app.get('/oauth2/discord/redirect', async (req: Request, res: Response) => {
//     const {code}=req.query;
//     if(code){
//         try{
//             console.log(code.toString())
//             const formData = new url.URLSearchParams({
//                 client_id: '952104325587550248',
//                 client_secret: 'RmK5wBZbKd9DbppqC90iRsce3w-_53AM',
//                 grant_type: 'authorization_code',
//                 code: code.toString(),
//                 redirect_uri: redirectUri
//             })
//             console.log(formData)
//             const response = await axios.post("https://discord.com/api/v8/oauth2/token",
//             formData.toString(),
//             {
//                 headers: { 
//                     'Content-Type': 'application/x-www-form-urlencoded'
//                 }
//             })
//             const {access_token, refresh_token}=response.data;
//             accessToken=access_token
//             refreshToken=refresh_token
// 						console.log(access_token)
//             console.log(response.data);
// 						console.log(accessToken)
//             res.send(200);
//         }catch(err){
//             console.error(err)
//             res.sendStatus(400)
//         }
//     }
// })

// app.get('/oauth2/discord/revoke', async (req: Request, res: Response) => {
//     try{
// 				console.log(clientSecret)
//         const formData = new url.URLSearchParams({
//             client_id: clientId,
//             client_secret: clientSecret,
//             token: accessToken
//         })
//         const response = await axios.post('https://discord.com/api/v8/oauth2/token/revoke',
//             formData.toString()
//         )
//         if(response.data != null) {
//             res.send(response.data)
//         }
//         console.log(response.data)
//     }catch(err){
//         console.error(err)
//     }
// })

// app.get('/oauth2/discord/authorize', async (req: Request, res: Response) => {
// 		res.redirect('https://discord.com/api/oauth2/authorize?client_id=952104325587550248&redirect_uri=https%3A%2F%2Fapi.kimane.se%2Foauth2%2Fdiscord%2Fredirect&response_type=code&scope=identify%20email%20connections%20guilds')
// })

