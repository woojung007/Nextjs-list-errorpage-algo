import styled from "@emotion/styled";

export const Background = styled.div`
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

export const Wrapper = styled.div`
  width: 80vw;
  height: 90vh;
  background-color: #fff;
  border-radius: 10px;
  z-index: 10;
  color: #000;
  display: flex;

  position: relative;
`;

export const FoodImage = styled.img`
  width: 50%;
  height: 100%;
  border-radius: 10px 0 0 10px;
`;

export const ModalRight = styled.div`
  width: 50%;
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  letter-spacing: 0.15rem;
  color: #000;
`;

export const CloseBtn = styled.button`
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

export const ContentWrapper = styled.div`
  width: 100%;
`;

export const Description = styled.section`
  line-height: 1.8;
  font-size: 15px;
`;

export const LastOrder = styled.div`
  height: 5%;
  padding-bottom: 80px;
  font-weight: 700;
  font-size: 15px;
`;

export const StoreURL = styled.div`
  cursor: pointer;
  font-size: 14px;
`;

export const GoURL = styled.div`
  font-weight: 700;
  padding-bottom: 10px;
`;
