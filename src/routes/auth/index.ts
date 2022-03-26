import {Router} from 'express';

const router = Router();

router.get('/discord/redirect');
router.get('/user');
router.get('/revoke');

export default router;