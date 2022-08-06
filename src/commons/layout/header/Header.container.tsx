import HeaderPresenter from "./Header.presenter";
import { useRouter } from "next/router";
import { useContext } from "react";
import { HeaderContext } from "../../store/headerContext";

export default function Header() {
  const { clicked, setClicked } = useContext(HeaderContext);
  const router = useRouter();

  const moveToAbout = () => {
    router.push("/about");
    setClicked("about");
  };

  const moveToStore = () => {
    router.push("/store");
    setClicked("store");
  };

  return (
    <HeaderPresenter
      moveToAbout={moveToAbout}
      moveToStore={moveToStore}
      clicked={clicked}
    />
  );
}
