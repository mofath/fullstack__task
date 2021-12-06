import { Router } from 'express';
import { CreateUserDto } from '../../dto';
import { authController } from '../controllers';
import { uploadMiddleware, validateMiddleware } from '../middleware';

const router = Router();

router.post(
  '/register',
  uploadMiddleware,
  validateMiddleware(CreateUserDto),
  authController.register
);

export default router;
