import React from 'react';
import { connect } from 'react-redux';
import { getPokemon } from '../actions/pokemonActionCreator';
import PokemonProfile from '../components/pokemonProfile/PokemonProfile';
import LoadData from '../components/dataLoading/LoadData';
import { withRouter } from 'react-router';

class PokemonPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { match } = this.props;
        this.props.loadPokemon(match.params.id);
    }

    render() {
        if (this.props.dataIsLoading) {
            return (
                <LoadData />
            );
        } else {
            return (
                <PokemonProfile pokemon={this.props.pokemon} />
            );
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadPokemon: (id) => dispatch(getPokemon(id)),
    };
}

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemonLoaded,
        dataIsLoading: state.dataIsLoading
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PokemonPage));