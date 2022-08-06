import { useRouter } from "next/router";
import ModalPresenter from "./Modal.presenter";

export default function Modal(props: any) {
  const router = useRouter();

  const onClickCloseBtn = () => {
    props.setIsOpen(false);
  };

  const onClickURL = (event: any) => {
    console.log(event.target.href);

    if (event.target.href === undefined) {
      router.push("/error");
    }
  };

  return (
    <ModalPresenter
      onClickCloseBtn={onClickCloseBtn}
      onClickURL={onClickURL}
      data={props.data}
      tabIndex={props.tabIndex}
    />
  );
}
