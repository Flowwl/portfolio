import React from "react";
import NavigationBar from "./app1/components/layout/NavigationBar2";
import Router from "./Router";
import Footer from "./app1/components/layout/footer/Footer2";
import "./App.scss";
import { Col, Row } from "react-bootstrap";

function App() {
  return (
    <Col className="min-vh-100 d-flex flex-column">
      <NavigationBar />
      <Row className="flex-grow-1">
        <Router />
      </Row>
      <Footer />
    </Col>
  );
}

export default App;
