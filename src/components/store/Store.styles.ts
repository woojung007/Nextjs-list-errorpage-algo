import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;
`;

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  position: absolute;
  top: 120px;
`;

export const H1Title = styled.h1`
  color: #394593;
  padding-bottom: 20px;
`;

export const UnderLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const UnderLine = styled.div`
  width: 49%;
  height: 6px;
  background-color: #394593;
`;

export const H1 = styled.h1`
  width: 70vw;
  font-weight: 700;
  font-size: 30px;
  text-align: left;
  padding-top: 100px;

  @media (min-width: 768px) and (max-width: 1400px) {
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

  @media (min-width: 768px) and (max-width: 1400px) {
    width: 90vw;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (min-width: 540px) and (max-width: 767px) {
    width: 90vw;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 281px) and (max-width: 539px) {
    width: 90vw;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 280px) {
    width: 90vw;
    grid-template-columns: 1fr;
  }
`;

export const StoreImage = styled.img`
  width: 190px;
  height: 190px;
  border-radius: 8px;
  margin: 0 15px 15px 0;

  cursor: pointer;

  @media (min-width: 768px) and (max-width: 1400px) {
    width: 220px;
    height: 220px;
  }

  @media (min-width: 281px) and (max-width: 767px) {
    width: 160px;
    height: 160px;
  }

  @media (max-width: 280px) {
    width: 250px;
    height: 250px;
  }
`;
