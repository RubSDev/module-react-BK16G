import { Button } from "bootstrap";
import React from "react";
import { Badge } from "react-bootstrap";
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
      <Badge className=" Badge" primary pill>
        Numero de producto {props.coutNumber}
      </Badge>
    </div>
  );
};

export default Card;
