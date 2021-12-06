import * as bcrypt from 'bcryptjs';
import config from '../config';

export const verifyPassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

export const encodePassword = (password: string) =>
  bcrypt.hash(password, config.SALT_FACTOR);