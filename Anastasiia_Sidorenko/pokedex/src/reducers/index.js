import { combineReducers } from 'redux';
import { pokemonListLoaded, pokemonLoaded, caughtPokemonsListLoaded, hasError, dataIsLoading } from './pokemonsReducers';

export default combineReducers({
    pokemonListLoaded,
    pokemonLoaded,
    caughtPokemonsListLoaded,
    hasError,
    dataIsLoading
});