import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import favicon from "@assets/img/favicon.ico";

export default function HelmetProvider({ lang }) {
  return (
    <Helmet>
      <title>GiG - {lang === "en" ? "Home Page" : "Hemsida"}</title>
      <meta name="description" content="GiG Media Front-End test" />
      <meta
        name="keywords"
        content="GiG, iGaming solutions, Gaming Innovation Group"
      />
      <link rel="shortcut icon" type="image/ico" href={`${favicon}`} />
    </Helmet>
  );
}

HelmetProvider.propTypes = {
  lang: PropTypes.string.isRequired,
};
