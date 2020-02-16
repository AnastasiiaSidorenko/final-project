import React from 'react';
import { connect } from 'react-redux';
import { getCaughtPokemons } from '../actions/pokemonActionCreator';
import Pokemon from '../components/pokemon/Pokemon';

class CaughtPokemons extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadCaughtPokemons('http://localhost:3004/caught-pokemons');
    }

    render() {
        return (
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4">
                    {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} showButton={false} />)}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCaughtPokemons: (url) => dispatch(getCaughtPokemons(url))
    };
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.caughtPokemonsListLoaded
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CaughtPokemons);
