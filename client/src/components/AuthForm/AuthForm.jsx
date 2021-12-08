import { useState, useRef } from 'react';
import LoginForm from './LoginForm/LoginForm';
import SignupForm from './SignupForm/SignupForm';


import AuthFormToggler from './Toggler/Toggler';
import './auth-form.scss';

// interface Props {
//   login: () => void;
//   signup: () => void;
// }

const AuthForm = ({ login, signup }) => {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const togglerRef = useRef(null);

  const toggleForm = () => {
    setIsLoginActive(!isLoginActive);
  };

  return (
    <div className='auth-from-wrapper'>
      {isLoginActive ? (
        <LoginForm submit={login} />
      ) : (
        <SignupForm submit={signup} />
      )}
      <AuthFormToggler
        current={isLoginActive ? 'signin' : 'signup'}
        ref={togglerRef}
        onClick={toggleForm}
      />
    </div>
  );
};

export default AuthForm;
