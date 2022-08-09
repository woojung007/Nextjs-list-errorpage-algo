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
  z-index: 100;
`;

export const LanguageWrapper = styled.div`
  width: 16%;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  position: relative;
`;

export const DefaultOption = styled.option`
  color: #111;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  position: relative;
  cursor: pointer;
  padding-left: 10px;
  z-index: 300;
`;

export const Language = styled.div`
  width: 90px;
  height: 120px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  padding: 30px 0 0 10px;

  position: absolute;
  top: -15px;
  margin-right: 30px;

  background-color: #fff;
  border: 1px solid #ebebeb;
  color: #111;
  font-weight: 400;
  font-size: 12px;
  cursor: pointer;
`;

export const Option = styled.a`
  color: #999;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  position: relative;
  cursor: pointer;

  :hover {
    color: #000;
    font-weight: 400;
  }
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
  font-size: 19px;
  letter-spacing: 0.03rem;
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
