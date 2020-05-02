import React from "react";
import { Row, Col, Button } from "react-bootstrap/";
import Map from "./Map.js";

export default function Hero() {
  return (
    <Row className="welcome">
      {/* hero and call to action */}
      <Col xs={12} sm={12} md={5} lg={5} className="hero">
        <h1>Corono Virus</h1>
        <p>Tracker</p>

        <Button>View Statistics</Button>
      </Col>

      {/* map image or background */}
      <Col xs={12} sm={12} md={7} lg={7}>
        <Map />
      </Col>
    </Row>
  );
}
