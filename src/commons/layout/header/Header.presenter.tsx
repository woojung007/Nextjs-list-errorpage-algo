import Link from "next/link";
import * as S from "./Header.styles";
import { useState } from "react";

interface IPropsHeaderPresenter {
  moveToAbout: () => void;
  moveToStore: () => void;
}

export default function HeaderPresenter(props: IPropsHeaderPresenter) {
  const [isHover, setIsHover] = useState(false);

  return (
    <S.Wrapper>
      <S.LanguageWrapper>
        <Link href="hhttps://www.common-ground.co.kr/index.html">
          <S.DefaultOption
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
          >
            KOREAN {">"}
          </S.DefaultOption>
        </Link>

        {isHover && (
          <S.Language
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
          >
            <S.Option href="https://www.common-ground.co.kr/global/en.html">
              ENGLISH
            </S.Option>
            <S.Option href="https://www.common-ground.co.kr/global/cn.html">
              CHINESE
            </S.Option>
            <S.Option href="https://www.common-ground.co.kr/global/jp.html">
              JAPANESE
            </S.Option>
          </S.Language>
        )}

        <Link href="https://www.kolonmall.com/COMMONGROUND">
          <a
            target="_blank"
            rel="noreferrer"
            style={{ color: "#394593", fontWeight: 300, fontSize: "12px" }}
          >
            ONLINE SHOP
          </a>
        </Link>
      </S.LanguageWrapper>
      <S.MenuDiv>
        <S.Menu onClick={props.moveToAbout}>ABOUT</S.Menu>
        <S.Menu onClick={props.moveToStore}>STORE</S.Menu>
      </S.MenuDiv>
      <S.Logo onClick={props.moveToStore}>
        AWESOME <br /> FOOD STORE
      </S.Logo>
    </S.Wrapper>
  );
}
