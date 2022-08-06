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

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <Wrapper>
      <Header />
      <Body>{props.children}</Body>
      <Footer />
    </Wrapper>
  );
}
