import React from "react";
import "../styles/globals.css";

export const MyApp = (props) => {
  return <props.Component {...props.pageProps} />;
};

export default MyApp;
