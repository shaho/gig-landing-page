import React from "react";

import "./styles.scss";

export default function Spinner() {
  return (
    <div className="spinner-warpper">
      <div className="spinner">
        <span className="spinner-inner-1"></span>
        <span className="spinner-inner-2"></span>
        <span className="spinner-inner-3"></span>
      </div>
    </div>
  );
}
