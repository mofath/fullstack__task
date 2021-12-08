import { Container } from 'typedi';
import { Request, Response, NextFunction } from 'express';
import { CategoryService } from '../../services';

export const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const categortyServInstance = Container.get(CategoryService);

  try {
    const categories = await categortyServInstance.getAll();

    return res.status(200).json({
      success: true,
      categories,
      message: 'Categories Fetched Successfully',
    });
  } catch (error) {
    next(error);
  }
};
