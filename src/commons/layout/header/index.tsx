import styled from "@emotion/styled";

const Wrapper = styled.header`
  width: 100vw;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: #fff;
  padding: 0 30px;
`;

const LanguageWrapper = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

const Language = styled.div`
  width: 100px;
`;

const MenuDiv = styled.div`
  width: 50%;
  font-size: 21px;
  font-weight: 700;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
`;

const Menu = styled.div`
  cursor: pointer;
  :hover {
    color: #394593;
  }
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  color: #394593;
  cursor: pointer;
`;

export default function Header() {
  return (
    <Wrapper>
      <LanguageWrapper>
        <Language>
          <select>
            <option>KOREAN</option>
            <option>ENGLISH</option>
            <option>CHINESE</option>
            <option>JAPANESE</option>
          </select>
        </Language>
        <a
          href="https://www.kolonmall.com/COMMONGROUND"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#394593" }}
        >
          ONLINE SHOP
        </a>
      </LanguageWrapper>
      <MenuDiv>
        <Menu>ABOUT</Menu>
        <Menu>STORE</Menu>
      </MenuDiv>
      <Logo>
        AWESOME <br /> FOOD STORE
      </Logo>
    </Wrapper>
  );
}
