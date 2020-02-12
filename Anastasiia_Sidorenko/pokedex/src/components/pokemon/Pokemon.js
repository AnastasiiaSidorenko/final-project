import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Pokemon = (props) => {
    return (
        <Link to={`/pokemon/${props.id}`}>
            <div className="col mb-4">
                <div className="text-center card h-100">
                    <img src={`./pokemons/${props.id}.png`} className="card-img-top" alt="Pokemon" />
                    <div className="card-body">
                        <p className="card-title">{props.name}</p>
                        {props.showButton && <button onClick={props.handleClick} disabled={props.isCaught} className="btn btn-primary">catch</button>}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Pokemon;