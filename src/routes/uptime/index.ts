import {Router} from 'express';
import { uptimeController } from '../../controllers/uptime';


const router = Router();

router.get('/',uptimeController);

export default router;