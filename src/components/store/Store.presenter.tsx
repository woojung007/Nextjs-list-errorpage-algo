import * as S from "./Store.styles";
import Modal from "../modal/Modal.container";
import { MouseEvent } from "react";

interface IPropsStorePresenter {
  data: any;
  onClickImage: (event: MouseEvent<HTMLImageElement>) => void;
  isOpen: boolean;
  setIsOpen: any;
  tabIndex: number;
}

export default function StorePresenter(props: IPropsStorePresenter) {
  return (
    <S.Wrapper>
      {/* <S.TopWrapper>
        <S.H1Title>STORE</S.H1Title>
        <S.UnderLineWrapper>
          <S.UnderLine></S.UnderLine>
          <S.UnderLine></S.UnderLine>
        </S.UnderLineWrapper>
      </S.TopWrapper> */}

      <S.ImageWrapper>
        <S.H1>STORE</S.H1>

        {props.data.map((el: any, index: number) => (
          <div key={el.id}>
            <S.StoreImage
              src={el.thumb}
              onClick={props.onClickImage}
              tabIndex={index}
            />
          </div>
        ))}
      </S.ImageWrapper>
      {props.isOpen && (
        <Modal
          setIsOpen={props.setIsOpen}
          tabIndex={props.tabIndex}
          data={props.data}
        />
      )}
    </S.Wrapper>
  );
}
