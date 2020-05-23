import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import shortid from "shortid";
import routes from "../../routes";
import "./index.scss";

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getList() {
    return Object.values(routes).map(route => {
      if (route.inFooter) {
        return (
          <Link className="text-decoration-none" key={shortid.generate()} to={route.path}>
            {route.name}
          </Link>
        );
      }
      return null;
    });
  }

  render() {
    return (
      <footer>
        <div className="container-footer">
          <Row>
            <Col className="links">{this.getList()}</Col>
            <Col className="year-footer">&reg; {new Date().getFullYear()}</Col>
          </Row>
        </div>
      </footer>
    );
  }
}
