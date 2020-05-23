import React, { Component } from "react";
import { Spinner } from "react-bootstrap";

export default class Loading extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="primary" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }
}
