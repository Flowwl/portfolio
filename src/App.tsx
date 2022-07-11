import React from 'react';
import NavigationBar from "./components/layout/NavigationBar";
import Router from "./Router";
import Footer from "./components/layout/footer/Footer";
import "./App.scss";
import { Col, Row } from "react-bootstrap";

function App() {
    return (
        <Col className="min-vh-100 d-flex flex-column">
            <NavigationBar/>
            <Row className="flex-grow-1">
                <Router/>
            </Row>
            <Footer/>
        </Col>
    );
}

export default App;
