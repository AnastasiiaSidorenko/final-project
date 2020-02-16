import axios from 'axios';
import { POKEMON_LIST_LOADED, POKEMON_LIST_CLEARED, POKEMON_LOADED, CAUGHT_POKEMONS_LIST_LOADED, CAUGHT_POKEMON_ID } from './actions';

export function pokemonListLoaded(pokemons) {
    return {
        type: POKEMON_LIST_LOADED,
        pokemons
    }
}

export function pokemonClear() {
    return {
        type: POKEMON_LIST_CLEARED
    }
}

export function pokemonLoaded(pokemon) {
    return {
        type: POKEMON_LOADED,
        pokemon
    }
}

export function caughtPokemonsListLoaded(pokemons) {
    return {
        type: CAUGHT_POKEMONS_LIST_LOADED,
        pokemons
    }
}

export function caughtPokemonId(id) {
    return {
        type: CAUGHT_POKEMON_ID,
        id
    }
}

export function getPokemons(page, limit = 12) {
    return (dispatch) => {
        axios.get(`http://localhost:3004/pokemons/?_page=${page}&_limit=${limit}`)
            .then(response => {
                dispatch(pokemonListLoaded(response.data));
            });
    }
}

export function getPokemon(id) {
    return (dispatch) => {
        axios.get(`http://localhost:3004/pokemons/${id}`)
            .then(response => {
                dispatch(pokemonLoaded(response.data));
            });
    }
}

export function getCaughtPokemons() {
    return (dispatch) => {
        axios.get('http://localhost:3004/caught-pokemons')
            .then(response => {
                dispatch(caughtPokemonsListLoaded(response.data));
            });
    }
}

export function catchPokemon(pokemon) {
    return (dispatch) => {
        axios.patch(`http://localhost:3004/pokemons/${pokemon.id}`, pokemon)
            .then(() => axios.post(`http://localhost:3004/caught-pokemons/`, pokemon))
            .then(() => dispatch(caughtPokemonId(pokemon.id)));
    }
}
