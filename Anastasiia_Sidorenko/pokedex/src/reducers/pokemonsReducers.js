import { POKEMON_LIST_LOADED, POKEMON_LIST_CLEARED } from '../actions/actions';

export function pokemonListLoaded(state = [], action) {
    switch (action.type) {
        case POKEMON_LIST_LOADED:
            return [
                ...state,
                ...action.pokemons
            ];
        case POKEMON_LIST_CLEARED:
            return [];
        default:
            return state;
    }
}

