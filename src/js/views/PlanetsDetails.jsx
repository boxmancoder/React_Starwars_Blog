import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const PlanetsDetails = () =>{
    const { store, actions } = useContext(Context);
    const params = useParams();
    const position = (params.idplanet) - 1;
    const planetSelect = store.planets[position];
    const urlImage = 'https://starwars-visualguide.com/assets/img/planets/';

    const handleError = (event) =>{
        event.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
    };

    return (
        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
            <article className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
            <figure className="m-2 me-lg-4">
                        <img 
                            src={`${urlImage}${params.idplanet}.jpg`} 
                            onError={handleError} 
                            className="rounded d-block" 
                            alt={`${planetSelect.name} image`} 
                        />
                        <figcaption className="text-center text-warning">{planetSelect.name}</figcaption>
                    </figure>
                    <div className="bg-dark rounded p-3 d-flex flex-column justify-content-center"> 
                        <h1>Planet Details</h1>
                        <h3 className="text-warning">Name: {planetSelect.name}</h3>
                        <p className="text-light">Population: {planetSelect.population}</p>
                        <p className="text-light">Climate: {planetSelect.climate}</p>
                        <p className="text-light">Diameter: {planetSelect.diameter}</p>
                        <p className="text-light">Gravity: {planetSelect.gravity}</p>
                        <p className="text-light">Orbital period: {planetSelect.orbital_period}</p>
                        <p className="text-light">Terrain: {planetSelect.terrain}</p>
                        <p className="text-light">Rotation period: {planetSelect.rotation_period}</p>
                        <Link to="/planets">
                            <button type="button" className="btn btn-warning mt-3 btn-sm">Return to planets</button>
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}