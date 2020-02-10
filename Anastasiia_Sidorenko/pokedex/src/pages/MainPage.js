import React from 'react';
import Pokemon from '../components/pokemon/Pokemon';

const MainPage = () => {
    const pokemons = [
        {
            "name": "bulbasaur",
            "id": 1
        },
        {
            "name": "ivysaur",
            "id": 2
        },
        {
            "name": "venusaur",
            "id": 3
        },
        {
            "name": "charmander",
            "id": 4
        },
        {
            "name": "charmeleon",
            "id": 5
        },
        {
            "name": "charizard",
            "id": 6
        },
        {
            "name": "squirtle",
            "id": 7
        },
        {
            "name": "wartortle",
            "id": 8
        },
        {
            "name": "blastoise",
            "id": 9
        },
        {
            "name": "caterpie",
            "id": 10
        }
    ];

    const handleClick = () => {
        alert('it works');
    }

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-4">
                {pokemons.map(pokemon => <Pokemon handleClick={handleClick} key={pokemon.id} name={pokemon.name} id={pokemon.id} showButton={true} />)}
            </div>
        </div>
    );
}

export default MainPage;