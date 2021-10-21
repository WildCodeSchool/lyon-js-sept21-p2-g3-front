/* eslint-disable */
import React from 'react';
import NavBar from './pages/NavBar';
import Footer from './pages/Footer';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import ListOfIngredients from './pages/ListOfIngredients';
import Planning from './pages/Planning';
import Shopkeepers from './pages/Shopkeepers';

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Favori" component={Favorites} />
        <Route path="/ListOfIngredients" component={ListOfIngredients} />
        <Route path="/Planning" component={Planning} />
        <Route path="/Shopkeepers" component={Shopkeepers} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
