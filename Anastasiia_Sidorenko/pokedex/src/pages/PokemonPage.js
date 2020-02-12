import React from 'react';
import PokemonProfile from '../components/pokemonProfile/PokemonProfile';
import { useParams } from 'react-router-dom';

const PokemonPage = () => {
    const { id } = useParams();

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

    const pokemon = pokemons.find(pokemon => pokemon.id === parseInt(id));

    return (
        <PokemonProfile name={pokemon.name} id={pokemon.id} />
    );
}

export default PokemonPage;