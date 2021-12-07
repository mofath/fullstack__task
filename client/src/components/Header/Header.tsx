import { FC } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header: FC = () => {
  // const [activeNavItem, setActiveNavItem] = useState(0);

  return (
    <header className='header'>
      <div className='header__container'>
        <Link to='/' className='header__logo-link'>
          CreditGo
        </Link>
        <div className='header__welcome-text'>Hi, Sign in!</div>
      </div>
    </header>
  );
};

export default Header;
