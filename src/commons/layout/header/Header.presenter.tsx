import * as S from "./Header.styles";

interface IPropsHeaderPresenter {
  moveToAbout: () => void;
  moveToStore: () => void;
}

export default function HeaderPresenter(props: IPropsHeaderPresenter) {
  return (
    <S.Wrapper>
      <S.LanguageWrapper>
        <S.Language>
          <select>
            <option>KOREAN</option>
            <option>ENGLISH</option>
            <option>CHINESE</option>
            <option>JAPANESE</option>
          </select>
        </S.Language>
        <a
          href="https://www.kolonmall.com/COMMONGROUND"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#394593" }}
        >
          ONLINE SHOP
        </a>
      </S.LanguageWrapper>
      <S.MenuDiv>
        <S.Menu onClick={props.moveToAbout}>ABOUT</S.Menu>
        <S.Menu onClick={props.moveToStore}>STORE</S.Menu>
      </S.MenuDiv>
      <S.Logo>
        AWESOME <br /> FOOD STORE
      </S.Logo>
    </S.Wrapper>
  );
}