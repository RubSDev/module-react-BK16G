import React, { Component } from "react";
import Card from "./CardUI";
import img1 from "../assets/Videogame01.jpg";
import img2 from "../assets/Videogame02.jpg";
import img3 from "../assets/Videogame03.jpg";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card
              imgsrc={img1}
              title="Uncharted 4: A Thief's End"
              price="$349.00"
            />
          </div>
          <div className="col-md-4">
            <Card
              imgsrc={img2}
              title="The Last of Us Part II"
              price="$665.77"
            />
          </div>
          <div className="col-md-4">
            <Card
              imgsrc={img3}
              title="The Witcher 3: Wild Hunt"
              price="$577.52 "
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
