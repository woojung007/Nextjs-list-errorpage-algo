import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 80vw;
  height: 90vh;
  background-color: #fff;
  border-radius: 10px;
  z-index: 10;
  color: black;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
`;

const FoodImage = styled.img`
  width: 50%;
  height: 100%;
`;

const ModalRight = styled.div`
  width: 50%;
  padding: 10px 60px 60px 60px;
  display: flex;
  flex-direction: column;
`;

const CloseBtn = styled.button`
  width: 70px;
  height: 70px;
  font-size: 18px;
  border-radius: 6px;
  border: none;
  background-color: transparent;
  color: black;
  cursor: pointer;
  :hover {
    background-color: black;
    color: #fff;
  }
`;

const StoreURL = styled.div`
  cursor: pointer;
`;

export default function Modal(props: any) {
  const router = useRouter();

  const onClickCloseBtn = () => {
    props.setIsOpen(false);
  };

  const onClickURL = (event: any) => {
    console.log(event.target.href);

    if (event.target.href === undefined) {
      router.push("/error");
    }
  };

  return (
    <Wrapper>
      <FoodImage src={props.data?.[props.tabIndex].image} />

      <ModalRight>
        <CloseBtn onClick={onClickCloseBtn}>X</CloseBtn>
        <div>{props.data?.[props.tabIndex].name}</div>
        <div>{props.data?.[props.tabIndex].description}</div>

        {props.data?.[props.tabIndex]?.url && (
          <StoreURL>
            <a
              target="_blank"
              href={props.data?.[props.tabIndex]?.url}
              rel="noopener noreferrer"
              onClick={onClickURL}
            >
              {props.data?.[props.tabIndex]?.url}
              <p>홈페이지 바로가기</p>
            </a>
          </StoreURL>
        )}
      </ModalRight>
    </Wrapper>
  );
}
