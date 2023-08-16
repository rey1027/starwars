import React, { Component } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const CardPeople = (props) => {
    return (
        <div className="card mx-2" style={{width: "18rem"}} key={props._id} > 
          <img className="card-img-top mt-2" src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} alt="Card image cap" /> 
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Gender: {props.gender}</p>
            <p className="card-text">Hair Color: {props.hair_color} </p>
            <p className="card-text">Eye-Color: {props.eye_color} </p>
          </div>
          <div className="card-body d-inline-flex justify-content-center border-top ">
          <Link to={`/characters/${props._id}`}><button className="btn btn-outline-primary me-2">Learn more!</button></Link>
            <button href="#" className="btn btn-outline-warning ms-5 fs-5 d-flex align-items-center"><AiOutlineHeart/></button>
          </div>
        </div>
    );
}

export default CardPeople;