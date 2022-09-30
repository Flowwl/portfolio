import React, { FC, useState } from "react";
import { Col, Row } from "react-bootstrap";

const Newsletter2: FC = () => {
  const [email, setEmail] = useState("");

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to our Newsletter<br></br> & Never miss latest updates
            </h3>
          </Col>
          <Col md={6} xl={7}>
            <div className="new-email-bx">
              <input
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
              />
              <button type="submit">Submit</button>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Newsletter2;
