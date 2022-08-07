import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;
`;

export const H1 = styled.h1`
  width: 70vw;
  font-weight: 700;
  font-size: 30px;
  text-align: left;
  padding-top: 100px;

  @media (min-width: 768px) and (max-width: 991px) {
    width: 90vw;
  }

  @media (max-width: 767px) {
    width: 90vw;
  }
`;

export const ImageWrapper = styled.section`
  width: 70vw;
  padding-top: 30px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-content: space-between;

  @media (min-width: 992px) and (max-width: 1400px) {
    width: 70vw;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 90vw;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 767px) {
    width: 90vw;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 380px) {
    width: 90vw;
    grid-template-columns: 1fr;
  }
`;

export const StoreImage = styled.img`
  width: 190px;
  height: 190px;
  border-radius: 8px;
  margin: 0 20px 20px 0;

  cursor: pointer;

  @media (min-width: 992px) and (max-width: 1400px) {
    width: 250px;
    height: 250px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 767px) {
    width: 280px;
    height: 280px;
  }
`;
