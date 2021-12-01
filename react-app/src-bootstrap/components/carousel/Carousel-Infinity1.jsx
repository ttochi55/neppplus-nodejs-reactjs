import React, { useState } from "react";
import styled from "styled-components";

// 1. activeIndex 에 따라서 image 출력 (map함수의 index 이용)
// 2. 이전 버튼을 누르면 이전이미지, 다음 버튼 누르면 다음 이미지로 변경

const Carousel = ({ data }) => {
  // 현재 어떤 이미지가 선택이 되어 있는지 확인
  const [activeIndex, setActiveIndex] = useState(0);

  // 1. 이전 버튼을 눌렀고 && 현재 첫번째 사진이면 마지막 사진으로
  // 2. 다음 버튼을 눌렀고 && 현재 마지막 사진이면 첫번째 사진으로
  // 3. 둘다 아니면 평소대로 i값 더하기
  console.log(activeIndex, data.length);

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(data.length - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < data.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };

  return (
    <Wrapper>
      <ImageList>
        {data.map((image, index) => (
          <Image key={index} src={image} active={index === activeIndex} />
        ))}
      </ImageList>
      <BtnLeft onClick={handlePrev}>Prev</BtnLeft>
      <BtnRight onClick={handleNext}>Next</BtnRight>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 320px;
  height: 160px;
  position: relative;
  margin: 30px;
`;
const ImageList = styled.div``;
const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* display: ${({ active }) => (active ? "block" : "none")}; */
  display: ${({ active }) => !active && "none"};
`;
const BtnLeft = styled.button`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  cursor: pointer;
`;
const BtnRight = styled.button`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export default Carousel;
