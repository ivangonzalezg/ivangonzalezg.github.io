import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import MainContainer from "../../components/container";
import "./index.scss";

export default class NotFound extends Component {
  render() {
    return (
      <MainContainer {...this.props} className="container-notfound">
        <Row>
          <Col className="code-notfound" sm="auto">
            <h1>
              <span>404</span>
              Not Found
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className="message-notfound" sm={12}>
            <h4>The page you have requested has left the port</h4>
            <br />
            <h5>Perhaps you are here because:</h5>
            <br />
            <ul>
              <li>The page has moved</li>
              <li>The page no longer exists</li>
              <li>You like 404 pages</li>
              <li>Please go back to Home Page</li>
            </ul>
          </Col>
        </Row>
      </MainContainer>
    );
  }
}
