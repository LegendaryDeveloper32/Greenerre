import React from "react";
import { Row, Col, Button, Card, ListGroup } from "react-bootstrap";

//import CSS
import "./GreenDAOla.scss";
const GreenDAOla = () => {
  return (
    <div className="p-5 text-center token-item">
      <h1 className="text-center">GreenDAOla($GD)</h1>
      <span className="text-center">
        Governance token/Stable coin for sustainability ecosystem
      </span>

      <Row
        lg={2}
        md={1}
        sm={1}
        xs={1}
        className="d-flex align-items-center justify-content-center mt-4"
      >
        <Col>
          <div className="d-grid gap-2">
            <div className="d-flex align-items-center justify-content-center">
              <img src="/token.png" />
            </div>
          </div>
        </Col>
        <Col>
          <Card>
            <Card.Header>SUPPLY</Card.Header>
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>
                  Total Supply: 5,000,000,000 tokens
                </ListGroup.Item>
                <ListGroup.Item>
                  Launch supply: 50,000,000 tokens (1%)
                </ListGroup.Item>
                <ListGroup.Item>
                  Reserve supply: 4,950,000,000 (99% for future mining)
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card className="mt-4">
            <Card.Header>VALUE</Card.Header>
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>
                  Peg to CO2 remissions (-ve emission)
                </ListGroup.Item>
                <ListGroup.Item>1$GD = 1tCO2 remissions</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button variant="success" className="w-100">
            BUY
          </Button>
        </Col>
        <Col>
          <Button variant="danger" className="w-100">
            SELL
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default GreenDAOla;
