import AboutPage from "./about/index";
import StorePage from "./store";
import { useContext } from "react";
import { HeaderContext } from "../src/commons/store/headerContext";

const MainPage = () => {
  const { clicked } = useContext(HeaderContext);

  return <>{clicked === "about" ? <AboutPage /> : <StorePage />}</>;
};

export default MainPage;
