import { FC } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Header, Footer } from '../index';
import './layout.scss';

interface Props {
  children: JSX.Element;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <BrowserRouter>
      <Header />
      <main className='screen'>
        <div className='screen__content'>
          <Switch>{children}</Switch>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
