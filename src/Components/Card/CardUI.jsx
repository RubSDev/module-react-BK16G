import React from "react";
import "./card-style.css";

const Card = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="Image 1" className="card-img-top" />
      </div>
      <div className="card-body text-dark"></div>
      <h4 className="card-title">{props.title}</h4>
      <p className="card-text text-precio">{props.price}</p>
      <a href="#" className="btn btn-outline-success">
        Comprar
      </a>
    </div>
  );
};

export default Card;
