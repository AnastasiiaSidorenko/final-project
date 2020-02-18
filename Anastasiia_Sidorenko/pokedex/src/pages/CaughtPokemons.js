import React from 'react';
import { connect } from 'react-redux';
import { getCaughtPokemons } from '../actions/pokemonActionCreator';
import Pokemon from '../components/pokemon/Pokemon';
import LoadData from '../components/dataLoading/LoadData';

class CaughtPokemons extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadCaughtPokemons();
    }

    render() {
        if (this.props.dataIsLoading) {
            return (
                <LoadData />
            );
        } else {
            return (
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-4  mt-3">
                        {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} showButton={false} />)}
                    </div>
                </div>
            );
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCaughtPokemons: () => dispatch(getCaughtPokemons())
    };
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.caughtPokemonsListLoaded,
        dataIsLoading: state.dataIsLoading
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CaughtPokemons);
