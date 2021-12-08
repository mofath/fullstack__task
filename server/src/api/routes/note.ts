import { Router } from 'express';
import { categoryController } from '../controllers';
const router = Router();

router.get('/categories', categoryController.getAll);

export default router;
