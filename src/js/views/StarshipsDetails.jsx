import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { Spinner } from "../component/Spinner.jsx";

export const StarshipsDetails = () =>{
    const { store, actions } = useContext(Context);
    const params = useParams();
    const urlImage= 'https://starwars-visualguide.com/assets/img/starships/';

    const handleError = (event) =>{
        event.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
    };

    useEffect(()=>{
       actions.getStarshipsDetails(params.idstarship); 
    }, []);

    return (
        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
            <article className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
               <figure className="m-2 me-lg-4"> 
                        <img 
                            src={`${urlImage}${params.idstarship}.jpg`} 
                            onError={handleError} 
                            className="rounded d-block" 
                            alt={`Image of ${store.currentStarship.properties?.name}`} 
                        />
                        <figcaption className="text-center text-warning">{store.currentStarship.properties?.name}</figcaption>
                    </figure>
                    <div className="bg-dark rounded p-3 d-flex flex-column justify-content-center">
                        <h1>Starship Details</h1>
                        {store.currentStarship.properties ? (
                            <>
                                <h3 className="text-warning">Name: {store.currentStarship.properties.name}</h3>
                                <p className="text-light">Model: {store.currentStarship.properties.model}</p>
                                <p className="text-light">Manufacturer: {store.currentStarship.properties.manufacturer}</p>
                                <p className="text-light">Cost in credits: {store.currentStarship.properties.cost_in_credits}</p>
                                <p className="text-light">Length: {store.currentStarship.properties.length}</p>
                                <p className="text-light">Max atmosphering speed: {store.currentStarship.properties.max_atmosphering_speed}</p>
                                <p className="text-light">Crew: {store.currentStarship.properties.crew}</p>
                                <p className="text-light">Passengers: {store.currentStarship.properties.passengers}</p>
                                <p className="text-light">Cargo capacity: {store.currentStarship.properties.cargo_capacity}</p>
                                <p className="text-light">Consumables: {store.currentStarship.properties.consumables}</p>
                                <p className="text-light">Hyperdrive rating: {store.currentStarship.properties.hyperdrive_rating}</p>
                                <p className="text-light">MGLT: {store.currentStarship.properties.MGLT}</p>
                                <p className="text-light">Starship class: {store.currentStarship.properties.starship_class}</p>
                                <p className="text-warning m-2 fst-italic text-center">{store.currentStarship.description}</p>
                            </>
                        ) : (
                            <Spinner />
                        )}
                        <Link to="/starships">
                            <button type="button" className="btn btn-warning mt-3 btn-sm">Return to starships</button>
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
}