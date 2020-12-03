import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';


const App = () => {
  return(
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;