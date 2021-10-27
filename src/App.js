import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import ShoppingList from './pages/ShoppingList';
import Planning from './pages/Planning';
import Shopkeepers from './pages/Shopkeepers';
// eslint-disable-next-line import/no-unresolved
import RecipeDetails from './pages/RecipeDetails';

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipe/:id" component={RecipeDetails} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/shopping-list" component={ShoppingList} />
        <Route path="/planning" component={Planning} />
        <Route path="/shopkeepers" component={Shopkeepers} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
