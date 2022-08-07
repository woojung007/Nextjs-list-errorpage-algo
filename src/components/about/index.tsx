import styled from "@emotion/styled";
import { FaLongArrowAltRight } from "react-icons/fa";

const Wrapper = styled.section`
  width: 1180px;
  padding: 100px 0;
  color: #000;
  letter-spacing: 0.1rem;
  line-height: 1.8;
`;

const Span = styled.span`
  padding: 8px 16px;
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
          상세 설명을 보여줍니다.
          <h3>기본 구성 및 추가 구성</h3>
          <p>
            ✓ 헤더 - 바디 - 푸터 형식으로 표현
            <br /> ✓ 헤더에는 프로젝트이름(`AWESOME FOOD STORE`)과
            메뉴(`ABOUT` + `STORE`) 표현
            <br /> ✓ 푸터에는 카피라이트 추가(`@ 2020 내이름`)
            <br /> - 레이아웃을 따로 만들어서 _app.tsx에 추가해주었습니다.
            (layout 폴더 위치 : src {">"}
            commons {">"} layout)
            <br /> - 중간에 위치한 남색의 ABOUT, STORE 타이틀 부분은
            <b>createContext와 useContext</b>를 사용하여 메뉴를 클릭할 때마다
            다른 타이틀이 나오도록 구현하였습니다. (context API 위치 : src {">"}
            commons {">"} context {">"} index.ts)
            <br /> - 에러 페이지에서는 <b>router.asPath</b>를 사용하여 중간
            타이틀을 안보이게 설정하였습니다.
            <br /> ✓ ABOUT엔 간단한 프로젝트 소개 문구 표현 (정적 페이지)
            <br /> ✓ STORE 리스트는 정사각형 이미지 그리드로 표현 (REST API
            사용)
            <br /> - <b>flex-wrap: wrap</b>을 사용하여
            <br /> ✓ 하나의 아이템을 선택하면 팝업을 띄우고 맛집 이름과 사진,
            설명, 홈페이지 바로가기(url이 있을 경우)를 표현
            <br /> - description에서 <b>substring()</b>과 <b>indexOf()</b>{" "}
            메서드를 사용해서 LAST ORDER 정보를 줄바꿈하여 보여주었습니다.
            <br /> ✓ 팝업 오른쪽 위에 X 버튼을 넣고 누르면 팝업이 닫힘
            <br /> ✓ 정의하지 않은 url로 접근시 에러 페이지를 보여주고 5초 후
            메인 페이지로 이동
            <br /> - 에러 페이지에서 메인페이지로 이동하기 전 5초 타이머
            구현하였습니다.
            <br /> - setInterval()과 clearInterval()을 사용하여 5초 타이머를
            만들었고 useRef()를 사용해서 5초가 줄어드는 것을 바로 화면에
            보여주었습니다.
            <br /> - setTimeout()을 사용해서 5초 뒤에 메인 페이지로 이동하도록
            하였습니다.
            <br /> - _app.tsx에서 axios와 router.asPath 그리고
            location.replace()를 사용하여 HTTP 상태코드가 404번일 때 에러
            페이지로 가도록 설정해주었습니다.
            <br /> - router.push를 이용하니 [Error: Abort fetching component for
            route:]의 에러가 났고 여러 방법을 시도해보았지만 해결이 되지
            않았습니다.
          </p>
        </div>
      </section>

      <h2>2. 사용한 기술 스택</h2>
      <section>
        <Span>Next.js</Span>
        <Span>React</Span>
        <Span>Typescript</Span>
        <Span>axios</Span>
        <Span>Emotion</Span>
      </section>
    </Wrapper>
  );
}
