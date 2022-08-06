import styled from "@emotion/styled";
import Image from "next/image";

const Wrapper = styled.footer`
  width: 100vw;
  height: 600px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopLine = styled.div`
  width: 99%;

  border-top: 10px solid #ebebeb;
`;

export default function Footer() {
  return (
    <Wrapper>
      <TopLine></TopLine>
      <div>
        <Image src="/c-footer-logo.svg" alt="logo" width={150} height={50} />
        <div>
          <Image src="/c-facebook.svg" alt="facebook" width={30} height={30} />
          <Image
            src="/c-instagram.svg"
            alt="instagram"
            width={30}
            height={30}
          />
        </div>
      </div>
      <p>서울특별시 광진구 아차산로 200</p>
      <p>코오롱인더스트리(주)FnC부문 커먼그라운드</p>
      <p>대표이사: 유석진 </p>
      <p> 법인등록번호: 321-85-00020 </p>
      <p>서울특별시 강남구 삼성로 518 (삼성동)</p>
    </Wrapper>
  );
}
