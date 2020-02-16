import { POKEMON_LIST_LOADED, POKEMON_LIST_CLEARED, POKEMON_LOADED, CAUGHT_POKEMONS_LIST_LOADED } from '../actions/actions';

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

export function pokemonLoaded(state = {}, action) {
    switch (action.type) {
        case POKEMON_LOADED:
            return action.pokemon;
        default:
            return state;
    }
}

export function caughtPokemonsListLoaded(state = [], action) {
    switch (action.type) {
        case CAUGHT_POKEMONS_LIST_LOADED:
            return action.pokemons;
        default:
            return state;
    }
}