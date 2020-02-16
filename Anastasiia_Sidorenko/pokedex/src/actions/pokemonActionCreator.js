import axios from 'axios';
import { POKEMON_LIST_LOADED, POKEMON_LIST_CLEARED, POKEMON_LOADED } from './actions';

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

export function getPokemons(url) {
    return (dispatch) => {
        axios.get(url)
            .then(response => {
                dispatch(pokemonListLoaded(response.data));
            });
    }
}

export function getPokemon(url) {
    return (dispatch) => {
        axios.get(url)
            .then(response => {
                dispatch(pokemonLoaded(response.data));
            });
    }
}
