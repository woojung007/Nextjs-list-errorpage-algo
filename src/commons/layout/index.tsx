import Header from "./header/Header.container";
import Footer from "./footer/index";
import styled from "@emotion/styled";
import { ReactNode } from "react";

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
  background-color: #fff;
`;

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  position: absolute;
  top: 120px;
`;

export const H1Title = styled.h1`
  color: #394593;
  padding-bottom: 20px;
`;

export const UnderLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const UnderLine = styled.div`
  width: 49%;
  height: 10px;
  background-color: #394593;
`;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <Wrapper>
      <Header />
      <TopWrapper>
        <H1Title>STORE</H1Title>
        <UnderLineWrapper>
          <UnderLine></UnderLine>
          <UnderLine></UnderLine>
        </UnderLineWrapper>
      </TopWrapper>
      <Body>{props.children}</Body>
      <Footer />
    </Wrapper>
  );
}
