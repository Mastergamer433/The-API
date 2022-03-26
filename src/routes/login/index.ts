import {Router} from 'express';
import { loginKimaneController } from '../../controllers/login';

const router = Router();

router.get('/login',loginKimaneController);

export default router;