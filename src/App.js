import React, { useState, useEffect, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import ShoppingList from './pages/ShoppingList';
import Planning from './pages/Planning';
import Shopkeepers from './pages/Shopkeepers';
import RecipeDetails from './pages/RecipeDetails';
import AddToPlanning from './pages2/AddToPlanning';
import { FavoritesContextProviders } from './contexts/FavoritesContexts';
import useScroll from './useScroll';

function App() {
  // construction of the arrays with the wanted informations from the api for the app
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const getRecipe = () => {
    axios

      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${process.env.REACT_APP_ID_EDAMAM}&app_key=${process.env.REACT_APP_KEY_EDAMAM}`
      )

      // Extract the DATA from the received response

      .then((response) => response.data)

      // Use this data to update the state

      .then((data) => {
        console.log(data);
        // data.hits contains all of the different recipes existing according to the input of the user
        setRecipes(data.hits);
      });
  };

  useEffect(() => {
    getRecipe();
  }, [search]);

  const mainRef = useRef();

  const searchBoxHeight = 70;
  const [height, setHeight] = useState(searchBoxHeight);
  const scroll = useScroll({
    wait: 50,
    element: mainRef.current || window,
  });

  useEffect(() => {
    if (scroll.direction === 'up') {
      setHeight((prevHeight) => {
        const newHeight = prevHeight - scroll.deltaY;
        return newHeight > searchBoxHeight ? searchBoxHeight : newHeight;
      });
    } else if (scroll.direction === 'down') {
      setHeight((prevHeight) => {
        // const leftToScroll =
        //  document.documentElement.scrollHeight - scroll.y - window.innerHeight;
        // if (leftToScroll <= searchBoxHeight) setHeight(searchBoxHeight);

        const newHeight = prevHeight - scroll.deltaY;
        return newHeight < 0 ? 0 : newHeight;
      });
    }
  }, [scroll]);

  return (
    <FavoritesContextProviders>
      <div className="flex flex-col h-screen align-center overflow-hidden">
        <NavBar setSearch={setSearch} />

        <div
          id="main"
          className="flex-grow overflow-y-scroll bg-third bg-opacity-30"
        >
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
            <Route path="/addtoplanning" component={AddToPlanning} />
          </Switch>
        </div>
        <Footer height={height} />
      </div>
    </FavoritesContextProviders>
  );
}

export default App;
