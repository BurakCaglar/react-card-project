import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardData from "./data/card-data";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

export default function App() {
  const cardList = CardData.map(item => (
    <div className={`col-sm-4 mb-2`}>
      <Card item={item} />
    </div>
  ));
  return (
    <div>
    <Navbar />
      <div className="container">
        <div className="row">{cardList}</div>
      </div>
    </div>
  );
}
