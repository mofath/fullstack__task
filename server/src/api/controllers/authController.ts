import { Container } from 'typedi';
import { Request, Response, NextFunction } from 'express';
import { logger } from '../../lib';
import { AuthService } from '../../services';

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authServInstance = Container.get(AuthService);

  try {
    await authServInstance.register(req.body);

    return res.status(201).json({
      success: true,
      message: 'Account created successfully',
    });
  } catch (error) {
    logger.error('AuthController: register');
    next(error);
  }
};
