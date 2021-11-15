import styled from "styled-components";
import { useState } from "react";

const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    "https://t1.daumcdn.net/cfile/tistory/9946A4505F5817A60D",
    "https://www.sjpost.co.kr/news/photo/202007/53199_48342_4214.jpg",
    "https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png",
  ];

  const handleClick = (i) => {
    const handleIndex = (prev) => {
      const nextIndex = prev + i;
      if (nextIndex < 0) {
        return data.length - 1;
      } else if (nextIndex > data.length - 1) {
        return 0;
      } else {
        return nextIndex;
      }
    };
    setActiveIndex(handleIndex);
  };

  return (
    <Carousel>
      {data.map((img, i) => (
        <Image isActive={activeIndex === i} src={img} key={i} />
      ))}

      <BtnLeft onClick={() => handleClick(-1)}>이전</BtnLeft>
      <BtnRight onClick={() => handleClick(1)}>다음</BtnRight>
    </Carousel>
  );
};

const Carousel = styled.div`
  width: 800px;
  height: 600px;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${({ isActive }) => !isActive && "0"};
  transition: opacity 0.5s;
`;

const BtnLeft = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
`;
const BtnRight = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
`;

export default CarouselComponent;
