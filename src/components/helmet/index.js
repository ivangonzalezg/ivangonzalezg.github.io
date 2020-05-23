import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import routes from "../../routes";

class CustomHelmet extends Component {
  render() {
    const { title, description, keywords } = this.props;
    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
    );
  }
}

export default class MainHelmet extends Component {
  getName = () => {
    try {
      const r = Object.values(routes).find(r => {
        const regex = r.path
          .split("/")
          .map(p => (p.includes(":") ? "[A-Za-z0-9]+" : p))
          .join("/");
        return window.location.pathname.match(`^${regex}$`);
      });
      return { title: r.name, ...r.meta };
    } catch (error) {
      return null;
    }
  };

  render() {
    return <CustomHelmet {...this.getName()} />;
  }
}

CustomHelmet.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.array.isRequired
};

CustomHelmet.defaultProps = {
  title: "Not Found",
  description: "Page doesn't exist",
  keywords: ["Not", "Found"]
};
