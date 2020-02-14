import React from 'react';
import { connect } from 'react-redux';
import { getPokemons } from '../actions/pokemonActionCreator';
import Pokemon from '../components/pokemon/Pokemon';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.pokemons.length) {
            this.props.loadPokemons('http://localhost:3004/pokemons/');
        }
    }

    handleClick = () => {
        alert('it works');
    }

    render() {
        return (
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4">
                    {this.props.pokemons.map(pokemon => <Pokemon handleClick={this.handleClick} key={pokemon.id} name={pokemon.name} id={pokemon.id} showButton={true} />)}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadPokemons: (url) => dispatch(getPokemons(url))
    };
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemonListLoaded
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);