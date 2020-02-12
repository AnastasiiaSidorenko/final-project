import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import MainPage from './pages/MainPage';
import CaughtPokemons from './pages/CaughtPokemons';
import PokemonPage from './pages/PokemonPage';

function App() {

  return (
    <div className="App">
      

      <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/caught-pokemons">
            <CaughtPokemons />
          </Route>
          <Route exact path="/pokemon/:id">
            <PokemonPage />
          </Route>
          <Route path="*">
            <MainPage />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
