import Header from "./header/index";
import Footer from "./footer/index";
import styled from "@emotion/styled";
import { ReactNode } from "react";

const Body = styled.div`
  width: 100vw;
  background-color: beige;
`;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <Header />
      <Body>{props.children}</Body>
      <Footer />
    </>
  );
}
