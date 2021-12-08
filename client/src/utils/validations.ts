import * as yup from 'yup';
import { IObjectKeys } from '../interfaces';

const SUPPORTED_FORMATS = [
  'image/jpeg',
  'image/svg',
  'image/png',
  'image/gif',
  'image/jpg',
];

const FILE_SIZE = 10000;

const validations: IObjectKeys = Object.freeze({
  username: yup.string().required('Username is required.'),
  password: yup
    .string()
    .required('Password is required.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  image: yup
    .mixed()
    .test('required', 'This input is required', (value) => value.length !== 0)
    .test(
      'fileFormat',
      'Unsupported file type',
      (value) => value[0] && SUPPORTED_FORMATS.includes(value[0].type)
    )
    .test(
      'fileSize',
      'File too large',
      (value) => value[0] && value[0].size < FILE_SIZE
    ),
  email: yup
    .string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required'),
});

const createSchema = (...args: string[]) => {
  const schema: IObjectKeys = {};

  args.forEach((arg) => {
    schema[arg] = validations[arg];
  });

  return yup.object().shape(schema);
};

export default createSchema;
