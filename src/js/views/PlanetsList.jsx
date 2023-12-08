import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { CardPlanets } from "./CardPlanets.jsx";
import "../../styles/home.css";


export const PlanetsList = () => {
    const { store, actions } = useContext(Context);
    
    return (
        <div>
            <h1 className="rubik-bubbles-header">Planets</h1>
            <div className="container-fluid m-2 me-0 pe-0 ps-0 w-auto">
                <div className="row d-flex justify-content-around me-0 pe-0 w-auto">
                {store.planets.map((item, id)=>{
                    const urlImage = 'https://starwars-visualguide.com/assets/img/planets/';
                    const position = id + 1;
                    return <CardPlanets name={item.name} diameter={item.diameter} population={item.population} terrain={item.terrain} url={`${urlImage}${position}.jpg`} id={position}/>
                })}
                </div>
            </div>
        </div>
)}