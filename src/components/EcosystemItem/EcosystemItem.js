import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
//import CSS
import "./EcosystemItem.scss";
const EcosystemItem = (props) => {
  return (
    <div className="item-control card card-custom bg-white border-white border-0">
      <div className="card-custom-img"></div>
      <div className="card-custom-avatar">
        <img className="img-fluid" src={props.image} alt="Avatar" />
      </div>
      <div className="card-body">
        <h4 className="card-title text-center">
          <a href={props.alink}>{props.text}</a>
        </h4>
      </div>
    </div>
  );
};

export default EcosystemItem;
