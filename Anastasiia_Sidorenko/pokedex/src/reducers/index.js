import { combineReducers } from 'redux';
import { pokemonListLoaded, pokemonLoaded, caughtPokemonsListLoaded } from './pokemonsReducers';

export default combineReducers({
    pokemonListLoaded,
    pokemonLoaded,
    caughtPokemonsListLoaded
});