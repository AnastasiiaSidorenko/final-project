import React from 'react';
import { connect } from 'react-redux';
import { getPokemon } from '../actions/pokemonActionCreator';
import PokemonProfile from '../components/pokemonProfile/PokemonProfile';
import { withRouter } from 'react-router';

class PokemonPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { match } = this.props;
        this.props.loadPokemon(`http://localhost:3004/pokemons/${match.params.id}`);
    }

    render() {
        return (
            <PokemonProfile pokemon={this.props.pokemon} />
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadPokemon: (url) => dispatch(getPokemon(url)),
    };
}

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemonLoaded
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PokemonPage));