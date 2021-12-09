import { Container } from 'typedi';
import { Request, Response, NextFunction } from 'express';
import { NoteService } from '../../services';

export const save = async (req: Request, res: Response, next: NextFunction) => {
  const noteServInstance = Container.get(NoteService);

  try {
    const note = { ...req.body, category_id: req.body.categoryId };
    await noteServInstance.save(note);

    return res.status(201).json({
      success: true,
      message: 'Note created successfully',
    });
  } catch (error) {
    next(error);
  }
};

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const noteServInstance = Container.get(NoteService);

  try {
    return res.status(200).json({
      success: true,
      message: 'Note updated',
    });
  } catch (error) {
    next(error);
  }
};

export const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const noteServInstance = Container.get(NoteService);
  const redisClient = Container.get('redisClient');

  const limit = +req.body.limit || 10;
  const offset = +req.body.offset || 0;
  
  try {
    const notes = await noteServInstance.getAll({
      limit,
      offset,
    });

    return res.status(200).json({
      ...notes,
      success: true,
      message: 'Notes fetched successfully',
    });
  } catch (error) {
    next(error);
  }
};

export const deleteNote = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const noteServInstance = Container.get(NoteService);

  try {
    return res.status(200).json({
      success: true,
      message: 'Notes deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
