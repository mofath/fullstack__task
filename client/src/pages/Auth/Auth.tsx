import { AuthForm } from '../../components';
import './auth.scss';

const LandingScreen = () => {

  const signup = async () => {};

  const login = async () => {};

  return (
    <div className='landing-screen'>
      <AuthForm signup={signup} login={login} />
    </div>
  );
};

export default LandingScreen;
