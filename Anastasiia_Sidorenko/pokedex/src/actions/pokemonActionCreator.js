import axios from 'axios';
import { POKEMON_LIST_LOADED } from './actions';

export function pokemonListLoaded(pokemons) {
    return {
        type: POKEMON_LIST_LOADED,
        pokemons
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
