import {Router} from 'express';
import authRoutes from './auth';
import loginRoutes from './login';
import uptimeRoutes from './uptime';

const router = Router();
router.use('/oauth2', authRoutes);
router.use('/login', loginRoutes);
router.use('/uptime', uptimeRoutes);


export default router;