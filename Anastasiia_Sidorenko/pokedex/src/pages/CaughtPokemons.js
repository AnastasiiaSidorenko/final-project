import React from 'react';
import Pokemon from '../components/pokemon/Pokemon';

const CaughtPokemons = () => {
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
    return (
        <div className="container">
            <div className="row">
                {pokemons.map(pokemon => <Pokemon name={pokemon.name} id={pokemon.id} showButton={false} />)}
            </div>
        </div>
    );
}

export default CaughtPokemons;

