import axios from "axios";
import { MouseEvent, useEffect, useState } from "react";
import StorePresenter from "./Store.presenter";

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

  const onClickImage = (event: MouseEvent<HTMLImageElement>) => {
    setIsOpen((prev) => !prev);
    setTabIndex((event.target as HTMLElement).tabIndex);
  };

  return (
    <StorePresenter
      onClickImage={onClickImage}
      data={data}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      tabIndex={tabIndex}
    />
  );
}
