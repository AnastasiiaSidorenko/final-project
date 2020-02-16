import { combineReducers } from 'redux';
import { pokemonListLoaded, pokemonLoaded } from './pokemonsReducers';

export default combineReducers({
    pokemonListLoaded,
    pokemonLoaded
});