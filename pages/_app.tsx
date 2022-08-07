import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/commons/layout";
import { HeaderContext } from "../src/commons/context";
import { useState } from "react";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [clicked, setClicked] = useState("store");

  const value = {
    clicked,
    setClicked,
  };

  axios.get(router.asPath).catch((error: AxiosError) => {
    if (error.response?.status === 404) {
      router.push("/error");
    }
  });

  return (
    <HeaderContext.Provider value={value}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </HeaderContext.Provider>
  );
}

export default MyApp;
