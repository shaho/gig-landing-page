import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

export default function Card({
  title,
  description,
  color = "color-1",
  rotate = false,
  monochrome = false,
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
  color: PropTypes.string,
  rotate: PropTypes.bool,
  monochrome: PropTypes.bool,
};
