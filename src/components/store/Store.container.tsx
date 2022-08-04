import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StoreWrapper = styled.div`
  width: 1180px;
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 100px 30px;
  background-color: lightpink;
`;

const Title = styled.p`
  width: 100vw;
  font-weight: 700;
  font-size: 28px;
  text-align: left;
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
  const getAPI = async () => {
    const response = await axios.get("http://localhost:9000/stores");
    setData(response.data);
    console.log(response);
  };

  console.log("data", data);

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <Wrapper>
      <StoreWrapper>
        <Title>EAT</Title>

        {data.map((el: any) => (
          <div key={el.id}>
            <StoreImage src={el.image} />
          </div>
        ))}
      </StoreWrapper>
    </Wrapper>
  );
}
