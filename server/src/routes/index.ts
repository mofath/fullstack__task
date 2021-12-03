import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  return res.send('welcome');
});

export default router;
