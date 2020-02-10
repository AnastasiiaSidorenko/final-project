import React from 'react';
import PokemonProfile from '../components/pokemonProfile/PokemonProfile';

const PokemonPage = () => {
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
        pokemons.map(pokemon => <PokemonProfile key={pokemon.id} name={pokemon.name} id={pokemon.id} />)
    );
}

export default PokemonPage;