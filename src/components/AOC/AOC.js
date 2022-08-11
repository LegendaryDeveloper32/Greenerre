import React from "react";
import { Card, Col, Row } from "react-bootstrap";

//import CSS
import "./AOC.scss";
const AOC = () => {
  return (
    <div className="p-5">
      <Row md={3} sm={1}>
        <Col className="d-flex align-items-center justify-content-center">
          <img src="/aoc.jpg" />
        </Col>
        <Col className="d-flex align-items-center justify-content-center flex-column">
          <h1 className="text-center">Altlanteans Official Club(AOC)</h1>
          <span className="text-center">Pronounced Alt – Lan- Teans</span>
        </Col>
        <Col className="d-none d-md-flex align-items-center justify-content-center">
          <img src="/aoc.jpg" />
        </Col>
      </Row>
      <Row className="aoc-content py-5" lg={5} md={3} sm={1}>
        <Col className="mb-4">
          <Card bg="success" text="light">
            <Card.Body className="d-flex align-items-center text-center justify-content-center">
              <Card.Text>Sustainability community</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-4">
          <Card bg="primary" text="light">
            <Card.Body className="d-flex align-items-center text-center justify-content-center">
              <Card.Text>
                Allow members to participate in networking sessions, webinars
                and conferences
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-4">
          <Card bg="danger" text="light">
            <Card.Body className="d-flex align-items-center text-center justify-content-center">
              <Card.Text>
                Promotes open sharing of knowledge in sustainability space
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-4">
          <Card bg="warning" text="light">
            <Card.Body className="d-flex align-items-center text-center justify-content-center">
              <Card.Text>Encourage and facilitate collaborations</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-4">
          <Card bg="info" text="light">
            <Card.Body className="d-flex align-items-center text-center justify-content-center">
              <Card.Text>Allow members to earn more tokens</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AOC;
