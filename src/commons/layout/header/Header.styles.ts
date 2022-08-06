import styled from "@emotion/styled";

export const Wrapper = styled.header`
  width: 100vw;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: #fff;
  padding: 0 30px;
`;

export const LanguageWrapper = styled.div`
  width: 17%;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  background-color: #fff;
`;

export const Language = styled.div`
  width: 100px;
`;

export const MenuDiv = styled.div`
  width: 50%;
  font-size: 21px;
  font-weight: 700;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  color: #000;
`;

export const Menu = styled.div`
  cursor: pointer;
  :hover {
    color: #394593;
  }
`;

export const Logo = styled.div`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  color: #394593;
  cursor: pointer;
`;
