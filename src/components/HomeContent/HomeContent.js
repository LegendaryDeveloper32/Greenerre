import React from "react";

//import Components
import { Card, CardGroup, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
//import CSS
import "./HomeContent.scss";

const HomeContent = () => {
  return (
    <Row lg={3} md={2} sm={1} className="g-4 m-5 home-content">
      <Col>
        <Link to="/services">
          <Card className="p-8 ">
            <Card.Img variant="top" src="/home/esg.jpg" />
            <Card.Body>
              <Card.Title className="text-center">ESG SERVICES</Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </Col>
      <Col>
        <a href="https://grenner-web3.onrender.com">
          <Card className="p-8">
            <Card.Img variant="top" src="/home/web3.webp" />
            <Card.Body>
              <Card.Title className="text-center">WEB3 SERVICES</Card.Title>
            </Card.Body>
          </Card>
        </a>
      </Col>
      <Col>
        <Link to="/token">
          <Card className="p-8">
            <Card.Img variant="top" src="/home/greendao.webp" />
            <Card.Body>
              <Card.Title className="text-center">GREEN DAO</Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </Row>

    // <CardGroup className="m-5">

    // </CardGroup>
  );
};

export default HomeContent;
