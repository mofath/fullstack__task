import multer from 'multer';
import { Request, Response } from 'express';
import path from 'path';
import { BadRequestError } from '../../errors';
import { IObjectKeys } from '../../types/general';

export default function multerUploader(
  req: Request,
  res: Response
): Promise<IObjectKeys> {
  const limits = { fileSize: 1024 * 1024 * 5 };

  const fileFilter = (req: Request, file: any, cb: any) => {
    const validationSet: string[] = [
      '.jpg',
      '.JPG',
      '.jpeg',
      '.JPEG',
      '.png',
      '.PNG',
    ];

    const isValid = validationSet.includes(path.extname(file.originalname));
    const error = isValid ? null : new BadRequestError('Invalid mime type');
    return cb(error, isValid);
  };

  const localStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  });

  const uploading = multer({
    storage: localStorage,
    limits,
    fileFilter,
  }).single('file');

  return new Promise((resolve, reject) => {
    uploading(req, res, function (error: multer.MulterError | any) {
      if ((error && error instanceof multer.MulterError) || error?.message)
        reject(new BadRequestError(error.message));

      // handle unknown error
      if (error) reject(new BadRequestError('Upload failed'));

      resolve({
        filePath: res.req.file.path as string,
        fileName: res.req.file.filename as string,
        ...req.body,
      });
    });
  });
}
