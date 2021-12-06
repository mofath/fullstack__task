import { Request, Response, NextFunction } from 'express';
import { logger, multerUploader } from '../../lib';

export default async function uploader(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const result = await multerUploader(req, res);
    req.body = { ...result };

    next();
  } catch (error) {
    logger.error('Failed to upload');
    next(error);
  }
}
