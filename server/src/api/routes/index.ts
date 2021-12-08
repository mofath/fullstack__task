import express from 'express';
import authRouter from './auth';
import noteRouter from './note';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/note', noteRouter);

router.use('/', express.static('uploads/'));

export default router;
