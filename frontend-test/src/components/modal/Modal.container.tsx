import ModalPresenter from "./Modal.presenter";

export default function Modal(props: any) {
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
