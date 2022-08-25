import { Routes, Route } from 'react-router-dom';

import Nav from './Nav';
import Home from './home';
import Page2 from './page';
import Footer from './footer';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Routes>
        <Route exact path='/' component={Home}/>
        <Route path='/page2' component={Page2}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;