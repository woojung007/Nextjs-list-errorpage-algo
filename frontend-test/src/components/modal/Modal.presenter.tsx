import * as S from "./Modal.styles";
import Link from "next/link";

interface IPropsModalPresenter {
  data: any;
  tabIndex: number;
  onClickCloseBtn: () => void;
}

export default function ModalPresenter(props: IPropsModalPresenter) {
  const des = props.data?.[props.tabIndex].description;
  const url = props.data?.[props.tabIndex]?.url;

  return (
    <S.Background>
      <S.Wrapper>
        <S.FoodImage src={props.data?.[props.tabIndex].image} />

        <S.ModalRight>
          <S.CloseBtn onClick={props.onClickCloseBtn}>X</S.CloseBtn>

          <S.ContentWrapper>
            <h1 style={{ height: "20%" }}>
              {props.data?.[props.tabIndex].name}
            </h1>
            <S.Description>
              {des.substring(0, des.indexOf("LAST"))}
            </S.Description>
            <br />
            <S.LastOrder>{des.substring(des.indexOf("LAST"))}</S.LastOrder>
          </S.ContentWrapper>
          <br />

          {url && (
            <S.StoreURL>
              <S.GoURL>홈페이지 바로가기</S.GoURL>
              <a target="_blank" href={url} rel="noopener noreferrer">
                {url}
              </a>
            </S.StoreURL>
          )}
        </S.ModalRight>
      </S.Wrapper>
    </S.Background>
  );
}
