import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import "./CStatistics.scss";
const CStatistics = () => {
  return (
    <div className="my-5">
      <h3>Statistics</h3>
      <Row className="d-flex align-items-stretch justify-content-center cstatistics-control">
        <Col>
          <Card>
            <Card.Body className="text-center">
              <img src="/hp.png" width="100%" />
              <Card.Text>HP</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body className="text-center">
              <img src="/attack_low.png" width="100%" />
              <Card.Text>ATTACK</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body className="text-center">
              <img src="/defence.png" width="100%" />
              <Card.Text>DEFENCE</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body className="text-center">
              <img src="/speed.png" width="100%" />
              <Card.Text>SPEED</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body className="text-center">
              <img src="/fatigue.png" width="100%" />
              <Card.Text>FATIQUE</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body className="text-center">
              <img src="/charm.png" width="100%" />
              <Card.Text>CHARM</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CStatistics;
