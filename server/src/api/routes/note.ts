import { Router } from 'express';
import { CreateNoteDTO } from '../../dto';
import { categoryController, noteController } from '../controllers';
import { validateMiddleware, paginateMiddleware } from '../middleware';
const router = Router();

router.get('/', paginateMiddleware, noteController.getAll);
router.post('/', validateMiddleware(CreateNoteDTO), noteController.save);
router.put('/:id', noteController.update);
router.delete('/:id', noteController.deleteNote);
router.get('/categories', categoryController.getAll);

export default router;
