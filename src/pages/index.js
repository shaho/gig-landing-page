import React, { useContext } from "react";

import "@styles/application.scss";

import Layout from "@components/layout";
import Logo from "@components/logo";
import Card from "@components/card";
import HelmetProvider from "@components/layout/helmet";
import HambergerMenu from "@components/hamburger";
import Spinner from "@components/layout/spinner";

import { GigContext } from "@context";

export default function Home() {
  const {
    companyValues,
    offices,
    monochrome,
    lang,
    rotateText,
    actions,
  } = useContext(GigContext);

  return (
    <>
      <HambergerMenu
        actions={actions}
        monochromed={monochrome === true}
        rotateText={rotateText}
        lang={lang}
      />
      <Layout>
        <HelmetProvider lang={lang} />
        <Logo />

        {(companyValues.length === 0 || offices.length === 0) && <Spinner />}

        {/* Company values */}
        {companyValues.map((value) => {
          return (
            <Card
              title={value.title}
              description={value.description}
              color={value.color}
              key={value.id}
              monochrome={monochrome}
              rotate={rotateText}
            />
          );
        })}

        {/* Offices List */}
        {offices.map((office) => {
          return (
            <Card
              title={office.country}
              description={office.address}
              color={office.color}
              key={office.id}
              monochrome={monochrome}
              rotate={rotateText}
            />
          );
        })}
      </Layout>
    </>
  );
}
