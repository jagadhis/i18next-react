import { Routes, Route } from 'react-router-dom';

import Nav from './Nav';
import Home from './home';
import Page from './page';
import Footer from './footer';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Routes>
        <Route exact path='/' component={Home}/>
        <Route path='/page' component={Page}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;