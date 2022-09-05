import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
//import CSS
import "./EcosystemItem.scss";
const EcosystemItem = (props) => {
  return (
    <div className="item-control">
      <a href={props.alink}>
        <img src={props.image} alt="Image" />
        <h4 className="text-center">{props.text}</h4>
      </a>
    </div>
  );
};

export default EcosystemItem;
