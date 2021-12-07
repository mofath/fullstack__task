import { Header } from './components';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route path='/'>
          <Header />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
