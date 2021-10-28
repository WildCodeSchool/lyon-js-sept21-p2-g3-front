import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
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
  // construction of the arrays with the wanted informations from the api for the app
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const getRecipe = () => {
    axios

      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=f3601de5&app_key=960c7d96572cfedbc3eb6bffbfaf24c9`
      )

      // Extract the DATA from the received response

      .then((response) => response.data)

      // Use this data to update the state

      .then((data) => {
        console.log(data.hits);
        // data.hits contains all of the different recipes existing according to the input of the user
        setRecipes(data.hits);
      });
  };

  useEffect(() => {
    getRecipe();
  }, [search]);

  return (
    <div className="flex flex-col h-screen align-center overflow-hidden">
      <NavBar setSearch={setSearch} />

      <div id="main" className="flex-grow overflow-y-scroll bg-background">
        <Switch>
          <Route exact path="/">
            {' '}
            <Home recipes={recipes} />
          </Route>
          <Route exact path="/recipe/:id" component={RecipeDetails} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/shopping-list" component={ShoppingList} />
          <Route path="/planning" component={Planning} />
          <Route path="/shopkeepers" component={Shopkeepers} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
