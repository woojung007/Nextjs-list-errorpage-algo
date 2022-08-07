import styled from "@emotion/styled";
import { FaLongArrowAltRight } from "react-icons/fa";

const Wrapper = styled.section`
  width: 1180px;
  padding: 100px 0;
  color: #000;
  letter-spacing: 0.1rem;
  line-height: 1.8;
`;

const StartProject = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  .arrow {
    font-size: 20px;
    color: #394593;
  }
`;

const StartProjectDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  padding: 3px 16px;
  margin: 0 10px;
  font-weight: 500;
  font-size: 16px;
  background-color: #c1c7ee;
  color: #111;
  border-radius: 8px;
`;

export default function AboutContainer() {
  return (
    <Wrapper>
      <h1 style={{ marginBottom: "60px" }}>About</h1>
      <h2>1. 프로젝트 소개</h2>
      <section style={{ marginBottom: "100px" }}>
        <h3>프론트엔드 테스트 - React 페이지 만들기</h3>
        <div>
          맛집 리스트를 보여주고 리스트 중 하나의 아이템을 선택하면 팝업으로
          상세 설명을 보여줍니다. <br />
          <input type="checkbox" /> 헤더 - 바디 - 푸터 형식으로 표현 <br />
          <input type="checkbox" /> 헤더에는 프로젝트이름(`AWESOME FOOD
          STORE`)과 메뉴(`ABOUT` + `STORE`) 표현 <br />
          <input type="checkbox" /> 푸터에는 카피라이트 추가(`@ 2020 내이름`){" "}
          <br />
          <input type="checkbox" /> ABOUT엔 간단한 프로젝트 소개 문구 표현 (정적
          페이지)
          <br />
          <input type="checkbox" /> STORE 리스트는 정사각형 이미지 그리드로 표현
          (REST API 사용) <br />
          <input type="checkbox" /> 하나의 아이템을 선택하면 팝업을 띄우고 맛집
          이름과 사진, 설명, 홈페이지 바로가기(url이 있을 경우)를 표현 <br />
          <input type="checkbox" /> 팝업 오른쪽 위에 X버튼을 넣고 누르면 팝업이
          닫힘 <br />
          <input type="checkbox" /> 정의하지 않은 url로 접근시 에러 페이지를
          보여주고 5초 후 메인 페이지로 이동
        </div>
      </section>
      <h2>2. 프로젝트 실행 방법</h2>
      <StartProject>
        <div>
          <h3>• Start json-server </h3>
          <StartProjectDiv>
            <Span>cd pages</Span>
            <FaLongArrowAltRight className="arrow" />
            <Span>cd api </Span>
            <FaLongArrowAltRight className="arrow" />
            <Span>npx json-server -p 9000 db.json</Span>
          </StartProjectDiv>
        </div>

        <div>
          <h3>• Start Project</h3>
          <StartProjectDiv>
            <Span>yarn install</Span>
            <FaLongArrowAltRight className="arrow" />
            <Span>yarn dev</Span>
          </StartProjectDiv>
        </div>
      </StartProject>
      <h2>2. 사용한 기술 스택</h2>
      <section>
        <div>Next.js</div>
        <div>React</div>
        <div>Typescript</div>
        <div>axios</div>
        <div>Emotion</div>
      </section>
    </Wrapper>
  );
}
