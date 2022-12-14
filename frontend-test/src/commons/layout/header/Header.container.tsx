import HeaderPresenter from "./Header.presenter";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const moveToAbout = () => {
    router.push("/about");
  };

  const moveToStore = () => {
    router.push("/store");
  };

  return (
    <HeaderPresenter moveToAbout={moveToAbout} moveToStore={moveToStore} />
  );
}
