import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
//import CSS
import "./EcosystemItem.scss";
const EcosystemItem = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <Card
      className="text-white drop-shadow-2xl ecosystem-item text-center"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <Link to={props.alink}>
        <Card.Img
          src="/projects/token.webp"
          alt="Card image"
          className={hover == true ? "" : "blur"}
        />
        <Card.ImgOverlay
          className={
            hover == false
              ? "d-flex align-items-center justify-content-center"
              : ""
          }
        >
          <Card.Title
            className={hover == false ? "text-white font-lg" : "text-white"}
          >
            {props.text}
          </Card.Title>
        </Card.ImgOverlay>
      </Link>
    </Card>
  );
};

export default EcosystemItem;
