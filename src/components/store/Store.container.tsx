import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "../modal";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
`;
const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
`;

const H1Title = styled.h1`
  color: #394593;
  padding-bottom: 20px;
`;

const UnderLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const UnderLine = styled.div`
  width: 49%;
  height: 10px;
  background-color: #394593;
`;

const H1 = styled.h1`
  width: 100%;
  font-weight: 700;
  font-size: 30px;
  text-align: left;
  padding-bottom: 20px;
`;

const ImageWrapper = styled.section`
  width: 1180px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 100px 0 100px 30px;
`;

const StoreImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 8px;
  margin: 0 30px 30px 0;
  cursor: pointer;
`;

export default function StoreContainer() {
  const [data, setData] = useState<any>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  const getAPI = async () => {
    const response = await axios.get("http://localhost:9000/stores");
    setData(response.data);
  };

  useEffect(() => {
    getAPI();
  }, []);

  const onClickImage = (event: any) => {
    setIsOpen((prev) => !prev);
    setTabIndex(event.target.tabIndex);
  };

  return (
    <Wrapper>
      <TopWrapper>
        <H1Title>STORE</H1Title>
        <UnderLineWrapper>
          <UnderLine></UnderLine>
          <UnderLine></UnderLine>
        </UnderLineWrapper>
      </TopWrapper>

      <ImageWrapper>
        <H1>STORE</H1>

        {data.map((el: any, index: number) => (
          <div key={el.id}>
            <StoreImage
              src={el.thumb}
              onClick={onClickImage}
              id={el.id}
              tabIndex={index}
            />
          </div>
        ))}
      </ImageWrapper>
      {isOpen && (
        <Modal setIsOpen={setIsOpen} tabIndex={tabIndex} data={data} />
      )}
    </Wrapper>
  );
}
