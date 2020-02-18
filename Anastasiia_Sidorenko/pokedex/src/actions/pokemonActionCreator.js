import axios from 'axios';
import { POKEMON_LIST_LOADED, POKEMON_LIST_CLEARED, POKEMON_LOADED, CAUGHT_POKEMONS_LIST_LOADED, CAUGHT_POKEMON_ID, HAS_ERROR, DATA_IS_LOADING } from './actions';

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

export function hasError(value) {
    return {
        type: HAS_ERROR,
        value
    }
}

export function dataIsLoading(value) {
    return {
        type: DATA_IS_LOADING,
        value
    }
}

export function getPokemons(page, limit = 12) {
    return (dispatch) => {
        dispatch(dataIsLoading(true));
        axios.get(`http://localhost:3004/pokemons/?_page=${page}&_limit=${limit}`)
            .then(response => {
                dispatch(pokemonListLoaded(response.data));
                dispatch(dataIsLoading(false));
            })
            .catch(() => dispatch(hasError(true)));
    }
}

export function getPokemon(id) {
    return (dispatch) => {
        dispatch(dataIsLoading(true));
        axios.get(`http://localhost:3004/pokemons/${id}`)
            .then(response => {
                dispatch(pokemonLoaded(response.data));
                dispatch(dataIsLoading(false));
            });
    }
}

export function getCaughtPokemons() {
    return (dispatch) => {
        dispatch(dataIsLoading(true));
        axios.get('http://localhost:3004/caught-pokemons')
            .then(response => {
                dispatch(caughtPokemonsListLoaded(response.data));
                dispatch(dataIsLoading(false));
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
