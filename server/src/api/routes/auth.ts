import { Router } from 'express';
import { CreateUserDto, VerifyRegisterDTO } from '../../dto';
import { authController } from '../controllers';
import { uploadMiddleware, validateMiddleware } from '../middleware';

const router = Router();

router.post(
  '/register',
  uploadMiddleware,
  validateMiddleware(CreateUserDto),
  authController.register
);

router.post(
  '/verify',
  validateMiddleware(VerifyRegisterDTO),
  authController.verifyRegister
);

export default router;
