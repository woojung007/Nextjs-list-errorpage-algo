import HeaderPresenter from "./Header.presenter";
import { useRouter } from "next/router";
import { useContext } from "react";
import { HeaderContext } from "../../context";

export default function Header() {
  const { clicked, setClicked } = useContext(HeaderContext);
  const router = useRouter();

  const moveToAbout = () => {
    setClicked("about");
    router.push("/about");
  };

  const moveToStore = () => {
    setClicked("store");
    router.push("/store");
  };

  return (
    <HeaderPresenter
      moveToAbout={moveToAbout}
      moveToStore={moveToStore}
      clicked={clicked}
    />
  );
}
