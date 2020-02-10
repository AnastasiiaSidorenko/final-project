import React from 'react';
import './Pokemon.css';

const Pokemon = (props) => {
    return (
        <div className="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 text-center card">
            <img src={`./pokemons/${props.id}.png`} className="card-img-top" alt="Pokemon" />
            <div className="card-body">
                <p className="card-title">{props.name}</p>
                {props.showButton && <button disabled={props.isCaught} className="btn btn-primary">catch</button>}
            </div>
        </div>
    );
}

export default Pokemon;