import React, { useContext, useCallback } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const BtnFavorites = () => {
    const { store, actions } = useContext(Context);

    const handleRemoveFavorites = useCallback((item) => {
        actions.removeFavorites(item);
    }, [actions]);

    return (
        <div className="dropdown dropstart me-3 d-sm-none d-md-block">
            <button
                type="button"
                className="btn btn-warning m-2 color-button dropdown-toggle position-relative"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <i className="fas fa-star fa-lg pe-2"></i>Favorites
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {store.favorites.length}
                </span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {store.favorites.length === 0 ? (
                    <li><span className="dropdown-item">No favorites selected.</span></li>
                ) : (
                    store.favorites.map((item) => (
                        <li key={item.id} className="d-flex justify-content-between align-items-center">
                            <Link to={`/${item.path}/${item.id}`} className="dropdown-item flex-grow-1">{item.name} - {item.type}</Link>
                            <button
                                type="button"
                                className="btn btn-light"
                                onClick={() => handleRemoveFavorites(item)}>
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};