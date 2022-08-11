import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";

//import CSS
import "./Ecosystem.scss";
const Ecosystem = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);

  return (
    <div className="p-4 ecosystem-control">
      <h1 className="text-center my-5">GreenDAO Ecosystem</h1>
      <Row lg={4} md={2} xs={1} className="eco-content">
        <Col className="">
          <Card
            className="text-white drop-shadow-2xl"
            onMouseOver={() => setHover1(true)}
            onMouseOut={() => setHover1(false)}
          >
            <Card.Img
              src="/projects/token.webp"
              alt="Card image"
              className={hover1 == true ? "" : "blur"}
            />
            <Card.ImgOverlay
              className={
                hover1 == false
                  ? "d-flex align-items-center justify-content-center"
                  : ""
              }
            >
              <Card.Title
                className={
                  hover1 == false ? "text-white font-lg" : "text-white"
                }
              >
                GreenDAOla
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col className="">
          <Card
            className="text-white drop-shadow-2xl"
            onMouseOver={() => setHover2(true)}
            onMouseOut={() => setHover2(false)}
          >
            <Card.Img
              src="/projects/token.webp"
              alt="Card image"
              className={hover2 == true ? "" : "blur"}
            />
            <Card.ImgOverlay
              className={
                hover2 == false
                  ? "d-flex align-items-center justify-content-center"
                  : ""
              }
            >
              <Card.Title
                className={
                  hover2 == false ? "text-white font-lg" : "text-white"
                }
              >
                AOC NFT
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col className="">
          <Card
            className="text-white drop-shadow-2xl"
            onMouseOver={() => setHover3(true)}
            onMouseOut={() => setHover3(false)}
          >
            <Card.Img
              src="/projects/token.webp"
              alt="Card image"
              className={hover3 == true ? "" : "blur"}
            />
            <Card.ImgOverlay
              className={
                hover3 == false
                  ? "d-flex align-items-center justify-content-center"
                  : ""
              }
            >
              <Card.Title
                className={
                  hover3 == false ? "text-white font-lg" : "text-white"
                }
              >
                Vpets
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col className="">
          <Card
            className="text-white drop-shadow-2xl"
            onMouseOver={() => setHover4(true)}
            onMouseOut={() => setHover4(false)}
          >
            <Card.Img
              src="/projects/token.webp"
              alt="Card image"
              className={hover4 == true ? "" : "blur"}
            />
            <Card.ImgOverlay
              className={
                hover4 == false
                  ? "d-flex align-items-center justify-content-center"
                  : ""
              }
            >
              <Card.Title
                className={
                  hover4 == false ? "text-white font-lg" : "text-white"
                }
              >
                Animalia
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Ecosystem;
