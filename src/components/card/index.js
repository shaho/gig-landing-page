import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

export default function Card({
  title,
  description,
  color,
  rotate,
  monochrome,
}) {
  return (
    <div
      className={`card ${color} ${rotate ? "rotate" : null} ${
        monochrome ? "monochrome" : null
      }`}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rotate: PropTypes.bool.isRequired,
  monochrome: PropTypes.bool.isRequired,
};
