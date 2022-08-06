import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
`;

const Wrapper = styled.div`
  width: 80vw;
  height: 90vh;
  background-color: #fff;
  border-radius: 10px;
  z-index: 10;
  color: #000;
  display: flex;

  position: relative;
`;

const FoodImage = styled.img`
  width: 50%;
  height: 100%;
  border-radius: 10px 0 0 10px;
`;

const ModalRight = styled.div`
  width: 50%;
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  letter-spacing: 0.15rem;
  color: #000;
`;

const CloseBtn = styled.button`
  width: 70px;
  height: 70px;
  font-size: 18px;
  border-radius: 6px;
  border: none;
  background-color: transparent;
  color: #000;

  position: absolute;
  top: 20px;
  right: 20px;

  cursor: pointer;
  :hover {
    background-color: #000;
    color: #fff;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

const Description = styled.section`
  line-height: 1.8;
  font-size: 15px;
`;

const LastOrder = styled.div`
  height: 5%;
  padding-bottom: 80px;
  font-weight: 700;
  font-size: 15px;
`;

const StoreURL = styled.div`
  cursor: pointer;
  font-size: 14px;
`;

const GoURL = styled.div`
  font-weight: 700;
  padding-bottom: 10px;
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

  const des = props.data?.[props.tabIndex].description;

  return (
    <Background>
      <Wrapper>
        <FoodImage src={props.data?.[props.tabIndex].image} />

        <ModalRight>
          <CloseBtn onClick={onClickCloseBtn}>X</CloseBtn>

          <ContentWrapper>
            <h1 style={{ height: "20%" }}>
              {props.data?.[props.tabIndex].name}
            </h1>
            <Description>{des.substring(0, des.indexOf("LAST"))}</Description>
            <br />
            <LastOrder>{des.substring(des.indexOf("LAST"))}</LastOrder>
          </ContentWrapper>
          <br />

          {props.data?.[props.tabIndex]?.url && (
            <StoreURL>
              <GoURL>홈페이지 바로가기</GoURL>

              <a
                target="_blank"
                href={props.data?.[props.tabIndex]?.url}
                rel="noopener noreferrer"
                onClick={onClickURL}
              >
                {props.data?.[props.tabIndex]?.url}
              </a>
            </StoreURL>
          )}
        </ModalRight>
      </Wrapper>
    </Background>
  );
}
