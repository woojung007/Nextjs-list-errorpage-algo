import Header from "./header/Header.container";
import Footer from "./footer/index";
import styled from "@emotion/styled";
import { ReactNode, useContext } from "react";
import { HeaderContext } from "../context";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Body = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 220px 30px 100px 30px;

  background-color: #fff;
  color: #000;
`;

const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  position: absolute;
  top: 120px;
`;

const H1Title = styled.h1`
  color: #394593;
  padding-bottom: 20px;
`;

const UnderLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const UnderLine = styled.div`
  width: 49%;
  height: 6px;
  background-color: #394593;
`;

interface ILayoutProps {
  children: ReactNode;
}

const HIDDEN_TITLE = ["/error"];

export default function Layout(props: ILayoutProps) {
  const { clicked } = useContext(HeaderContext);
  const router = useRouter();
  const isHiddenTitle = HIDDEN_TITLE.includes(router.asPath);

  return (
    <Wrapper>
      <Header />
      <Body>
        {!isHiddenTitle && (
          <TopWrapper>
            <H1Title>
              {/* {location.href.includes("about") && "ABOUT"}
              {location.href.includes("store") && "STORE"} */}

              {clicked === "about" && "ABOUT"}
              {clicked === "store" && "STORE"}
            </H1Title>
            <UnderLineWrapper>
              <UnderLine></UnderLine>
              <UnderLine></UnderLine>
            </UnderLineWrapper>
          </TopWrapper>
        )}
        {props.children}
      </Body>
      <Footer />
    </Wrapper>
  );
}
