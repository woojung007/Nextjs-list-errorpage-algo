import { useRouter } from "next/router";
import ModalPresenter from "./Modal.presenter";
import axios, { AxiosError } from "axios";
import { useEffect } from "react";

export default function Modal(props: any) {
  const router = useRouter();

  const onClickCloseBtn = () => {
    props.setIsOpen(false);
  };

  return (
    <ModalPresenter
      onClickCloseBtn={onClickCloseBtn}
      data={props.data}
      tabIndex={props.tabIndex}
    />
  );
}
