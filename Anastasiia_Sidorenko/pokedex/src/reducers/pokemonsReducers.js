import { POKEMON_LIST_LOADED } from '../actions/actions';

export function pokemonListLoaded(state = [], action) {
    switch (action.type) {
        case POKEMON_LIST_LOADED:
            return action.pokemons;
        default:
            return state;
    }
}