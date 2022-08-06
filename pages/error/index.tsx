import { useRouter } from "next/router";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  color: black;
`;
export default function ErrorPage() {
  const router = useRouter();
  const moveToMainPage = () => {
    router.push("/");
  };

  setTimeout(moveToMainPage, 5000);

  return (
    <Wrapper>
      <h1>Error</h1>
      <div>접근할 수 없는 URL입니다.</div>
      <div>
        <span>5</span> 초 뒤 메인페이지로 이동합니다!
      </div>
    </Wrapper>
  );
}
