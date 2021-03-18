import React from "react";
import { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";

import { listCompanyOffices, listCompanyValues } from "@services";
import { getRandomNumber } from "@helpers";

export const GigContext = createContext({
  offices: [],
  companyValues: [],
  monochrome: false,
  lang: "en",
  rotateText: false,
  actions: {},
});

export function GigProvider({ children }) {
  const [offices, setOffices] = useState([]);
  const [companyValues, setCompanyValues] = useState([]);
  const [monochrome, setMonochrome] = useState(false);
  const [lang, setLang] = useState("en");
  const [rotateText, setRotateText] = useState(false);

  const randomizeColors = () => {
    const newOffices = offices.map((office) => ({
      ...office,
      color: `color-${getRandomNumber()}`,
    }));

    const newComapnies = companyValues.map((company) => ({
      ...company,
      color: `color-${getRandomNumber()}`,
    }));

    setOffices(newOffices);
    setCompanyValues(newComapnies);
  };

  const handleMonochrome = () => {
    setMonochrome(!monochrome);
  };

  const handleRotateTexts = () => {
    setRotateText(!rotateText);
  };

  const swicthLanguage = (event) => {
    setLang(event.target.value);
  };

  const loadCompanyValues = async (lang, updateColors = true) => {
    try {
      const result = await listCompanyValues(lang);
      setCompanyValues(
        result.data.map((value, index) => ({
          ...value,
          color: updateColors
            ? `color-${getRandomNumber()}`
            : companyValues[index].color,
        })),
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadOffices = async () => {
      try {
        const result = await listCompanyOffices();
        setOffices(
          result.data.map((office) => ({
            ...office,
            color: `color-${getRandomNumber()}`,
          })),
        );
      } catch (error) {
        console.log(error);
      }
    };

    loadCompanyValues();
    loadOffices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadCompanyValues(lang, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return (
    <GigContext.Provider
      value={{
        offices,
        companyValues,
        monochrome,
        lang,
        rotateText,
        actions: {
          randomizeColors,
          handleMonochrome,
          swicthLanguage,
          handleRotateTexts,
        },
      }}
    >
      {children}
    </GigContext.Provider>
  );
}

GigProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
