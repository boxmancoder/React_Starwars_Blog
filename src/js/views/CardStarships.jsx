import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const CardStarships = (props) => {
    const { store, actions } = useContext(Context);

    const handleError = (event) =>{
        event.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
    };

    return(
        <div className="card m-1 mt-3 col-sm-4 col-md-3 col-lg-2 bg-light">
            <img src={props.url} onError={handleError} className="rounded d-block mt-2" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            </div>
            <div className="d-flex justify-content-between">
                <Link to={`/starships/${props.id}`} type="button" className="btn btn-dark m-2 btn-sm">More details</Link>
                <button type="button" className="btn btn-warning m-2 btn-sm" onClick={() => {actions.addFavorites({name: props.name, id: props.id, type: 'Starship', path: 'starships'})}}><i class="far fa-heart"></i></button>
            </div>
        </div>
    )
}