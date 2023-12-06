import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const PeopleDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const position = (params.idpeople) - 1;
    const peopleSelect = store.people[position];
    const urlImage = 'https://starwars-visualguide.com/assets/img/characters/';
    
    const handleError = (event) =>{
        event.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
    };

    return (
        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
            <article className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
    <figure className="m-2 me-lg-4"> {/* Added 'me-lg-4' for margin-end on large screens */}
        <img src={`${urlImage}${params.idpeople}.jpg`} onError={handleError} className="rounded d-block" alt={`${peopleSelect.name} image`} />
        <figcaption className="text-center text-warning">{peopleSelect.name}</figcaption>
    </figure>
    <div className="bg-dark rounded p-3 d-flex flex-column justify-content-center">
        <h1 className="text-light">Character Details</h1>
        <h3 className="text-warning">Name: {peopleSelect.name}</h3>
        <p className="text-light">Gender: {peopleSelect.gender}</p>
        <p className="text-light">Height: {peopleSelect.height}</p>
        <p className="text-light">Mass: {peopleSelect.mass}</p>
        <p className="text-light">Eye color: {peopleSelect.eye_color}</p>
        <p className="text-light">Hair color: {peopleSelect.hair_color}</p>
        <p className="text-light">Skin color: {peopleSelect.skin_color}</p>
        <Link to="/people">
            <button type="button" className="btn btn-warning mt-3 btn-sm">Return to characters</button>
        </Link>
    </div>
</article>
            </div>
        </div>
    );
}