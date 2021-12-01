import React from "react";
import Carousel from "./Carousel";

const carouselData = [
  "https://picsum.photos/id/1/320/160",
  "https://picsum.photos/id/10/320/160",
  "https://picsum.photos/id/100/320/160",
  "https://picsum.photos/id/1000/320/160",
  "https://picsum.photos/id/1001/320/160",
];

const Bootstrap = () => {
  return (
    <div>
      <Carousel data={carouselData} />
    </div>
  );
};

export default Bootstrap;
