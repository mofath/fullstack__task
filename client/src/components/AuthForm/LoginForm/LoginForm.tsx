import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import createSchema from '../../../utils/validations';
import { Input, Button } from '../../../patterns';

interface Props {
  submit?: () => void;
}

const LoginForm: React.FC<Props> = ({ submit }) => {
  const loginSchema = createSchema('username', 'password');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    // submit()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='auth-form'>
      <div className='auth-form__inputs-wrapper'>
        <div className='auth-form__group'>
          <Input
            type='text'
            name='phone'
            placeholder='Username'
            register={register}
            error={errors['username']}
            className='auth-form__input'
          />
        </div>
        <div className='auth-form__group'>
          <Input
            type='password'
            name='password'
            placeholder='Password'
            register={register}
            error={errors['password']}
            className='auth-form__input'
          />
        </div>
      </div>
      <div className='auth-form__group--submit'>
        <Button type='submit' className='auth-form__submit-btn'>
          Sign In
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
