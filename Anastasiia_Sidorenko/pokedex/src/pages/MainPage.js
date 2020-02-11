import React from 'react';
import Pokemon from '../components/pokemon/Pokemon';

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemons: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3004/pokemons')
          .then(response => response.json())
          .then(json => this.setState({ pokemons: json }));
      }

    handleClick = () => {
        alert('it works');
    }

    render() {
        return (
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4">
                    {this.state.pokemons.map(pokemon => <Pokemon handleClick={this.handleClick} key={pokemon.id} name={pokemon.name} id={pokemon.id} showButton={true} />)}
                </div>
            </div>
        );
    }
}

export default MainPage;