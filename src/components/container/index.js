import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import Helmet from "../helmet";
import Footer from "../footer";
import Header from "../header";

export default class MainContainer extends Component {
  render() {
    return (
      <Fragment>
        <Helmet />
        <Header />
        <main>
          <Container className={this.props.className}>{this.props.children}</Container>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired
};
