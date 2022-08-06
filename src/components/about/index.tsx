import styled from "@emotion/styled";

const Wrapper = styled.section`
  width: 100vw;
  padding: 200px 0;
  color: #000;
`;

export default function AboutContainer() {
  return (
    <Wrapper>
      <h1>About</h1>
      <div>프로젝트 소개</div>
    </Wrapper>
  );
}
