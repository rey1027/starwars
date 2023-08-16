import React, { Component } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const CardVehicle = (props) => {
    return (
        <div className="card mx-2" style={{width: "18rem"}} key={props._id} > 
          <img className="card-img-top mt-2" src={`https://starwars-visualguide.com/assets/img/vehicles/${props.uid}.jpg`} alt="Card image cap" /> 
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Model: {props.model}</p>
            <p className="card-text">Passenger: {props.passenger} </p>
            <p className="card-text">Consumables: {props.consumables} </p>
          </div>
          <div className="card-body d-inline-flex justify-content-center border-top ">
          <Link to={`/vehicles/${props._id}`}><button className="btn btn-outline-primary me-2">Learn more!</button></Link>
            <button href="#" className="btn btn-outline-warning ms-5 fs-5 d-flex align-items-center"><AiOutlineHeart/></button>
          </div>
        </div>
    );
}

export default CardVehicle;