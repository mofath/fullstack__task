import { Auth, Home } from './pages';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Layout } from './components';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/home'>
            <Layout>
              <Home />
            </Layout>
          </Route>
          <Route path='/'>
            <Auth />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
