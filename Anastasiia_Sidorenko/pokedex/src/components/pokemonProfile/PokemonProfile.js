import React from 'react';

const PokemonProfile = (props) => {
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`./../pokemons/${props.id}.png`} className="card-img-top" alt="Pokemon" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">id:{props.id}</h5>
                        <p className="card-text">{props.name}</p>
                        <p className="card-text"><small className="text-muted">Not caught</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonProfile;