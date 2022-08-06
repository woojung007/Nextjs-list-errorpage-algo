import styled from "@emotion/styled";
import Image from "next/image";

const Wrapper = styled.footer`
  width: 100vw;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const TopLine = styled.div`
  width: 100%;
  padding: 0 30px;
  border-top: 10px solid #ebebeb;
  margin-bottom: 30px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
`;

const SNSWrapper = styled.div`
  width: 8%;
  height: 25px;
  border-left: 1px solid #bdbdbd;
  display: flex;
  justify-content: space-evenly;
`;

const Location = styled.div`
  width: 100%;
  padding-bottom: 20px;
  text-align: left;
  font-size: 14px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #888;
  padding-bottom: 60px;
`;

const Content = styled.div`
  height: 12px;
  padding: 0 10px;
  border-right: 1px solid #888;
`;

const Name = styled.div`
  width: 100%;
  text-align: left;
  font-size: 14px;
  font-size: 14px;
  padding-bottom: 20px;
  color: #888;
`;

export default function Footer() {
  return (
    <Wrapper>
      <TopLine></TopLine>
      <ImageWrapper>
        <Image src="/c-footer-logo.svg" alt="logo" width={150} height={50} />
        <SNSWrapper>
          <Image src="/c-facebook.svg" alt="facebook" width={15} height={10} />
          <Image
            src="/c-instagram.svg"
            alt="instagram"
            width={30}
            height={30}
          />
        </SNSWrapper>
      </ImageWrapper>

      <Location>서울특별시 광진구 아차산로 200</Location>

      <ContentWrapper>
        <Content style={{ paddingLeft: 0 }}>
          코오롱인더스트리(주)FnC부문 커먼그라운드{" "}
        </Content>
        <Content>대표이사: 유석진 </Content>
        <Content>법인등록번호: 321-85-00020 </Content>
        <div style={{ paddingLeft: 10 }}>
          서울특별시 강남구 삼성로 518 (삼성동)
        </div>
      </ContentWrapper>

      <Name>@ 2020 이우정 YIWOOJUNG.</Name>
    </Wrapper>
  );
}
