// @ts-ignore
import App from "next/app";
import React from "react";
import "semantic-ui-css/semantic.min.css";
import "../lib/app.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }
}
