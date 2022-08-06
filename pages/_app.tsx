import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/commons/layout";
import { HeaderContext } from "../src/commons/store/headerContext";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [clicked, setClicked] = useState("store");
  const value = {
    clicked,
    setClicked,
  };

  return (
    <HeaderContext.Provider value={value}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </HeaderContext.Provider>
  );
}

export default MyApp;
