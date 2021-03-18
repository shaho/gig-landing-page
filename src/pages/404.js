import React from "react";
import Layout from "@components/layout";

export default function PageNotFound() {
  return (
    <Layout>
      <div className="not-found">
        <div className="inner">
          <h1>
            Not found <span>:(</span>
          </h1>
          <p>Sorry, but the page you were trying to view does not exist.</p>
          <i>404</i>
        </div>
      </div>
    </Layout>
  );
}
