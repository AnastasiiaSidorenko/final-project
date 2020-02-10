import React from 'react';
import Header from './components/header/Header';
import MainPage from './pages/MainPage';
// import CaughtPokemons from './pages/CaughtPokemons';
// import PokemonPage from './pages/PokemonPage';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      {/* <CaughtPokemons /> */}
      {/* <PokemonPage /> */}
    </div>
  );
}

export default App;
