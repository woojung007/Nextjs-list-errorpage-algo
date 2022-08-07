import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/commons/layout";
import { HeaderContext } from "../src/commons/context";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [clicked, setClicked] = useState("store");
  const [isError, setIsError] = useState(false);

  const value = {
    clicked,
    setClicked,
  };

  // const Error = () => {
  axios.get(router.asPath).catch((error: AxiosError) => {
    if (error.response?.status === 404) {
      router.push("/error");
      setIsError(false);
      console.log(error);
    }
  });
  // };

  // useEffect(() => {
  //   Error();
  // },[]);

  // if (isError) router.push("/error");

  return (
    <HeaderContext.Provider value={value}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </HeaderContext.Provider>
  );
}

export default MyApp;
