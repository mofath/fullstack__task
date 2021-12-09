import { FC } from 'react';
import { Header, Footer } from '../index';
import './layout.scss';

interface Props {
  children: JSX.Element;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='screen'>
        <div className='screen__content'>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
