import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/layout/Header';
//import Main from './components/layout/Main';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import NotFound from './pages/404';
// import TestParams from './pages/Test';
import Category from './pages/Category';
import Recipe from './pages/Recipe';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className='container content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contacts' component={Contacts} />
            {/* <Route path='/test/:id' component={TestParams} /> */}
            <Route path='/category/:name' component={Category} />
            <Route path='/recipe/:id' component={Recipe} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
