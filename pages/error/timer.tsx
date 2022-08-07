import { useRef, useEffect } from "react";

const TimerPage = () => {
  let interval: any;
  let countRef = useRef<any>(5);

  const Timer = () => {
    let time = 4;
    interval = setInterval(() => {
      if (time >= 0) {
        countRef.current.innerText = time;
        time -= 1;
      } else if (time < 0) {
        clearInterval(interval);
      }
    }, 1000);
  };

  useEffect(() => {
    Timer();
  }, []);

  return (
    <>
      <span ref={countRef}>{countRef.current}</span>초 뒤 메인페이지로
      이동합니다!
    </>
  );
};

export default TimerPage;
