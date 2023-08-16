import React, { Component } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const CardPlanet = (props) => {
    return (
        <div className="card mx-2" style={{width: "18rem"}} key={props._id} > 
          <img className="card-img-top mt-2" src={`https://starwars-visualguide.com/assets/img/planets/${props.uid}.jpg`} alt="Card image cap" /> 
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Population: {props.population}</p>
            <p className="card-text">Terrain: {props.terrain} </p>
            <p className="card-text">Climate: {props.climate} </p>
          </div>
          <div className="card-body d-inline-flex justify-content-center border-top ">
          <Link to={`/planets/${props._id}`}><button className="btn btn-outline-primary me-2">Learn more!</button></Link>
          <button  className="btn btn-outline-warning ms-5 fs-5 "><AiOutlineHeart/></button>
          </div>
        </div>
    );
}

export default CardPlanet;