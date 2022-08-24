import React from "react";
import { Row, Col } from "react-bootstrap";

import EcosystemItem from "../EcosystemItem/EcosystemItem";
const Ecosystem = () => {
  return (
    <div className="p-5">
      <h1 className="text-center mb-4">Ecosystem</h1>
      <Row lg={5} md={2} xs={1} className="eco-content">
        <Col className="mb-2">
          <EcosystemItem text="GreenDAOla" alink="/greenDAOla" />
        </Col>
        <Col className="mb-2">
          <EcosystemItem text="Altlanteans Official Club" alink="/" />
        </Col>
        <Col className="mb-2">
          <EcosystemItem text="Vpets" alink="/vpets" />
        </Col>
        <Col className="mb-2">
          <EcosystemItem text="TheGreenerMarket" alink="/market" />
        </Col>
        <Col className="mb-2">
          <EcosystemItem text="Coming soon" alink="/soon" />
        </Col>
      </Row>
    </div>
  );
};

export default Ecosystem;
