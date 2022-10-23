import { useState } from "react";
import CircleActive from "../../assets/icons/circle-fill.svg";
import CircleOutline from "../../assets/icons/circle-outline.svg";
import CarouselArrow from "../CarouselArrow/CarouselArrow";
import ProductCaption from "../ProductCaption/ProductCaption";
import { carouselData } from "./CarouselData";

const ProductCarousel = () => {
  const [index, setIndex] = useState(0);

  const prevImg = () =>
    setIndex(index === 0 ? carouselData.length - 1 : index - 1);
  const nextImg = () => setIndex((index + 1) % carouselData.length);
  const goToImg = (index: number) => setIndex(index);

  return (
    <div className="relative h-screen w-screen">
      <img
        src={carouselData[index].img}
        alt={carouselData[index].name}
        className="object-cover object-center h-full w-full brightness-90"
        data-testid="product-img"
      />
      <ProductCaption product={carouselData[index]} />
      <CarouselArrow onClick={prevImg} direction="left" />
      <CarouselArrow onClick={nextImg} direction="right" />
      <div
        className="absolute left-1/2 translate-x-[-50%] bottom-3 flex gap-2"
        data-testid="indicators"
      >
        {carouselData.map((_imgs, i) => (
          <button
            type="button"
            key={i}
            onClick={() => goToImg(i)}
            className="w-6 h-6"
          >
            <img src={index === i ? CircleActive : CircleOutline} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
