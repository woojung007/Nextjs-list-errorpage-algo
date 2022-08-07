import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const H1 = styled.h1`
  width: 1180px;
  font-weight: 700;
  font-size: 30px;
  text-align: left;
  padding-top: 100px;
`;

export const ImageWrapper = styled.section`
  width: 1180px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 30px 0 0 30px;
  vertical-align: baseline;
`;

export const StoreImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 8px;
  margin: 0 30px 30px 0;
  cursor: pointer;
`;
