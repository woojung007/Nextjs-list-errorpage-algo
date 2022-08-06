import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
`;
export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
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
  height: 10px;
  background-color: #394593;
`;

export const H1 = styled.h1`
  width: 100%;
  font-weight: 700;
  font-size: 30px;
  text-align: left;
  padding-bottom: 20px;
`;

export const ImageWrapper = styled.section`
  width: 1180px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 100px 0 100px 30px;
`;

export const StoreImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 8px;
  margin: 0 30px 30px 0;
  cursor: pointer;
`;
