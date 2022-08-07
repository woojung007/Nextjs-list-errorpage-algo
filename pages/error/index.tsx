import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { useRef, useEffect } from "react";

const Wrapper = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 150px;

  background-color: #fff;
  color: #000;
  letter-spacing: 0.15rem;
  line-height: 1.8;
`;
export default function ErrorPage() {
  const router = useRouter();
  let countRef = useRef<any>(5);

  const moveToMainPage = () => {
    router.push("/");
  };

  let interval: any;
  function Timer() {
    let time = 4;
    interval = setInterval(() => {
      if (time >= 0) {
        countRef.current.innerText = time;
        time -= 1;
      } else if (time < 0) {
        clearInterval(interval);
        moveToMainPage();
      }
    }, 1000);
  }

  useEffect(() => {
    Timer();
  });

  return (
    <Wrapper>
      <h1 style={{ color: "#394593" }}>Error</h1>
      <div>접근할 수 없는 URL입니다.</div>
      <div>
        <span ref={countRef}>{countRef.current}</span>초 뒤 메인페이지로
        이동합니다!
      </div>
    </Wrapper>
  );
}
