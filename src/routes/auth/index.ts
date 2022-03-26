import {Router} from 'express';
import { authDiscordRedirectController } from '../../controllers/auth';

const router = Router();

router.get('/discord/redirect',authDiscordRedirectController);
router.get('/user');
router.get('/revoke');

export default router;