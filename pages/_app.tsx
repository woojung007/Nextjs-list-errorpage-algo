import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/commons/layout";
import { useState } from "react";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [clicked, setClicked] = useState("store");

  axios.get(router.asPath).catch((error: AxiosError) => {
    if (error.response?.status === 404) {
      // router.push("/error");
      location.replace("/error");
    }
  });

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
