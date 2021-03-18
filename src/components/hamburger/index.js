/* eslint-disable jsx-a11y/no-onchange */
import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import { useOnClickOutside } from "@hooks/useOnClickOutside";

import "./styles.scss";

export default function HambergerMenu({
  actions,
  monochromed,
  lang,
  rotateText,
}) {
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => {
    setOpen(false);
  });

  return (
    <div ref={node}>
      <button
        className={`menu-button ${open ? "open-menu" : "close-menu"}`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div />
        <div />
        <div />
      </button>

      <div
        className="menu"
        style={{
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <section>
          <button className="btn" onClick={actions.randomizeColors}>
            Randomize Color
          </button>
        </section>

        <section>
          <button className="btn" onClick={actions.handleMonochrome}>
            Monochrome is {monochromed ? "on" : "off"}
          </button>
        </section>

        <section>
          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              id="rotate-text"
              onChange={actions.handleRotateTexts}
              value={rotateText}
            />
            <label htmlFor="rotate-text"> Rotate Texts</label>
          </div>
        </section>

        <section>
          <div className="select-wrapper">
            <select
              onChange={actions.swicthLanguage}
              value={lang}
              className="select"
            >
              <option value="en">English</option>
              <option value="sv">Swedish</option>
            </select>
          </div>
        </section>
      </div>
    </div>
  );
}

HambergerMenu.propTypes = {
  actions: PropTypes.object.isRequired,
  monochromed: PropTypes.bool.isRequired,
  lang: PropTypes.string.isRequired,
  rotateText: PropTypes.bool.isRequired,
};
