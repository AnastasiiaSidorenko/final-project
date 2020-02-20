import React from 'react';
import { Link } from 'react-router-dom';
import { addDefaultSrc } from '../../utilities/addDefaultSrc';

const Pokemon = (props) => {
    return (
        <Link to={`/pokemon/${props.pokemon.id}`}>
            <div className="col mb-4">
                <div className="text-center card h-100">
                    <img src={`../images/pokemons/${props.pokemon.id}.png`} onError={addDefaultSrc} className="card-img-top" alt="Pokemon" />
                    <div className="card-body">
                        <p className="card-title">{props.pokemon.name}</p>
                        {props.showButton && <button onClick={(event) => props.handleClick(event, props.pokemon)} disabled={props.pokemon.isCaught} className="btn btn-primary">catch</button>}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Pokemon;