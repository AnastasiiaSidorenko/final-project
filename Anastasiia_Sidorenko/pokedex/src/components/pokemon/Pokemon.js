import React from 'react';
import { Link } from 'react-router-dom';

const Pokemon = (props) => {
    const addDefaultSrc = (e) => {
        e.target.src = require('../../images/no-image-icon.png');
    }

    return (
        <Link to={`/pokemon/${props.pokemon.id}`}>
            <div className="col mb-4">
                <div className="text-center card h-100">
                    <img src={`./pokemons/${props.pokemon.id}.png`} onError={addDefaultSrc} className="card-img-top" alt="Pokemon" />
                    <div className="card-body">
                        <p className="card-title">{props.pokemon.name}</p>
                        {props.showButton && <button onClick={(e) => props.handleClick(e, props.pokemon)} disabled={props.pokemon.isCaught} className="btn btn-primary">catch</button>}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Pokemon;