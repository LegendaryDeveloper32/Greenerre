import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
//import CSS
import "./EcosystemItem.scss";
const EcosystemItem = (props) => {
  return (
    <div className="item-control">
      <img src={props.image} alt="Image" />
      <h4 className="text-center">
        <a href={props.alink}>{props.text}</a>
      </h4>
    </div>
  );
};

export default EcosystemItem;
