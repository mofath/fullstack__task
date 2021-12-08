import { forwardRef } from 'react';
import './toggler.scss';

// interface Props {
//   current: string;
//   onClick: () => void;
// }

const AuthFormToggler = forwardRef(
  ({ current, onClick }, ref) => {
    return (
      <div ref={ref} className='auth-form-toggler__wrapper'>
        {current === 'signin'
          ? "Dont't have an account?"
          : 'Already, have an account?'}
        <span onClick={onClick} className='auth-form-toggler'>
          &nbsp;
          {current === 'signin' ? 'Sign Up' : 'Sign In'}
        </span>
      </div>
    );
  }
);

AuthFormToggler.displayName = 'AuthFormToggler';

export default AuthFormToggler;
