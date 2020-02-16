import React from 'react';
import { connect } from 'react-redux';
import { getPokemons, pokemonClear } from '../actions/pokemonActionCreator';
import Pokemon from '../components/pokemon/Pokemon';
import axios from 'axios';

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1
        };
    }

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.page !== prevState.page) {
            this.getData();
        }
    }

    componentWillUnmount() {
        this.props.clearPokemonsStore();
    }

    getData = () => {
        this.props.loadPokemons(this.state.page);
    }

    handleCatchClick = (event, pokemon) => {
        event.preventDefault();
        const updatedPokemon = {
            ...pokemon,
            isCaught: true,
            date: Date.now()
        };
        axios.patch(`http://localhost:3004/pokemons/${pokemon.id}`, updatedPokemon)
            .then(() => axios.post(`http://localhost:3004/caught-pokemons/`, updatedPokemon));
    }

    handleLoadClick = () => {
        this.setState((state) => ({
            page: state.page + 1
        }));
    }

    render() {
        return (
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 mt-3">
                    {this.props.pokemons.map(pokemon => <Pokemon
                        handleClick={this.handleCatchClick}
                        key={pokemon.id}
                        pokemon={pokemon}
                        showButton={true} />)}
                </div>
                <div className="d-flex justify-content-center mb-3">
                    <button onClick={this.handleLoadClick} type="button" className="btn btn-primary btn-lg">Load more</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadPokemons: (page) => dispatch(getPokemons(page)),
        clearPokemonsStore: () => dispatch(pokemonClear())
    };
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemonListLoaded
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);