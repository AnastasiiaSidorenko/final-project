import axios from 'axios';
import { POKEMON_LIST_LOADED, POKEMON_LIST_CLEARED } from './actions';

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

export function getPokemons(url) {
    return (dispatch) => {
        axios.get(url)
            .then(response => {
                dispatch(pokemonListLoaded(response.data));
            })
    }
}
