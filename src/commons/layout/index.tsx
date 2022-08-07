import Header from "./header/Header.container";
import Footer from "./footer/index";
import styled from "@emotion/styled";
import { ReactNode } from "react";
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

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  return (
    <Wrapper>
      <Header />
      <Body>{props.children}</Body>
      <Footer />
    </Wrapper>
  );
}
