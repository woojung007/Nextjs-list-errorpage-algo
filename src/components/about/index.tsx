import styled from "@emotion/styled";

const Wrapper = styled.section`
  width: 1180px;
  padding: 100px 0;
  color: #000;
  letter-spacing: 0.1rem;
  line-height: 1.8;
`;

const ContentWrapper = styled.div`
  padding-top: 60px;
`;

const Add = styled.p`
  padding-left: 30px;
`;

const Span = styled.span`
  padding: 4px 12px;
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
      <section style={{ marginBottom: "150px" }}>
        <h3>프론트엔드 테스트 - React 페이지 만들기</h3>
        <div>
          맛집 리스트를 보여주고 리스트 중 하나의 아이템을 선택하면 팝업으로
          상세 설명을 보여줍니다. <br />
          <ContentWrapper>
            <h3>레이아웃 구성</h3>
            ✓ 헤더 - 바디 - 푸터 형식으로 표현
            <br /> ✓ 헤더에는 프로젝트이름(`AWESOME FOOD STORE`)과
            메뉴(`ABOUT` + `STORE`) 표현
            <br /> ✓ 푸터에는 카피라이트 추가(`@ 2020 내이름`)
            <Add>
              - 레이아웃을 따로 만들어서 _app.tsx에 추가해주었습니다.
              <br /> -{" "}
              <b>
                layout 폴더 위치 : src {">"}
                commons {">"} layout
              </b>
              <br /> - 중간에 위치한 남색의 ABOUT, STORE 타이틀 부분은
              <Span>createContext</Span>와 <Span>useContext</Span>를 사용하여
              메뉴를 클릭할 때마다 다른 타이틀이 나오도록 구현하였습니다.
              <br /> -{" "}
              <b>
                context API 위치 : src {">"}
                commons {">"} context {">"} index.ts{" "}
              </b>
              <br /> - 에러 페이지에서는 <Span>router.asPath</Span>를 사용하여
              중간 타이틀을 안보이게 설정하였습니다.
            </Add>
          </ContentWrapper>
          <ContentWrapper>
            <h3>ABOUT, STORE 페이지와 팝업 구성</h3>
            ✓ ABOUT엔 간단한 프로젝트 소개 문구 표현 (정적 페이지)
            <br /> ✓ STORE 리스트는 정사각형 이미지 그리드로 표현 (REST API
            사용)
            <Add>
              - <Span>flex-wrap: wrap</Span>을 사용하여 이미지 그리드를
              구현하였습니다.
            </Add>
            <p>
              ✓ 하나의 아이템을 선택하면 팝업을 띄우고 맛집 이름과 사진, 설명,
              홈페이지 바로가기(url이 있을 경우)를 표현
            </p>
            <Add>
              - description에서 <Span>substring( )</Span>과{" "}
              <Span>indexOf( )</Span> 메서드를 사용해서 LAST ORDER 정보를
              줄바꿈하여 보여주었습니다.
            </Add>
            ✓ 팝업 오른쪽 위에 X 버튼을 넣고 누르면 팝업이 닫힘
          </ContentWrapper>
          <ContentWrapper>
            <h3>에러 페이지 구성</h3>✓ 정의하지 않은 url로 접근시 에러 페이지를
            보여주고 5초 후 메인 페이지로 이동
            <Add>
              - 에러 페이지에서 메인페이지로 이동하기 전 <b>5초 타이머</b>
              구현하였습니다.
              <br /> - <Span>setInterval()</Span>과 <Span>clearInterval()</Span>
              을 사용하여 5초 타이머를 만들었고<Span>useRef()</Span>를 사용해서
              5초가 줄어드는 것을 바로 화면에 보여주었습니다.
              <br /> - <Span>setTimeout( )</Span>을 사용해서 5초 뒤에 메인
              페이지로 이동하도록 하였습니다.
              <br /> - _app.tsx에서 <Span>axios</Span>와{" "}
              <Span>router.asPath </Span> 그리고
              <Span>location.replace( )</Span>를 사용하여 HTTP 상태코드가
              404번일 때 에러 페이지로 가도록 설정해주었습니다.
              <br /> -{" "}
              <b style={{ backgroundColor: "lightyellow" }}>시도했던 방법</b> :
              router.push를 이용하니{" "}
              <b>[Error: Abort fetching component for route:]</b>의 에러가 났고
              useState나 useContext도 사용해보고 Timer를 따로 컴포넌트로 빼는
              등의 여러가지 방법을 시도해보았지만 해결이 되지 않았습니다.
            </Add>
          </ContentWrapper>
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
