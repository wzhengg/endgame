import { useState } from "react";
import ChevronLeft from "../../assets/chevron-left.svg";
import ChevronRight from "../../assets/chevron-right.svg";
import CircleActive from "../../assets/circle-fill.svg";
import CircleOutline from "../../assets/circle-outline.svg";
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
      <div className="absolute top-1/2 translate-y-[-50%] left-40">
        <h2
          className="text-6xl text-white font-semibold mb-1"
          data-testid="product-name"
        >
          {carouselData[index].name}
        </h2>
        <p
          className="text-xl text-white font-medium"
          data-testid="product-caption"
        >
          {carouselData[index].caption}
        </p>
        <button
          type="button"
          className="bg-white font-semibold tracking-widest px-8 py-5 mt-4"
        >
          BUY NOW
        </button>
      </div>
      <button
        type="button"
        onClick={prevImg}
        className="absolute top-1/2 translate-y-[-50%] left-4 w-14 h-14"
        data-testid="prev-btn"
      >
        <img src={ChevronLeft} alt="" />
      </button>
      <button
        type="button"
        onClick={nextImg}
        className="absolute top-1/2 translate-y-[-50%] right-4 w-14 h-14"
        data-testid="next-btn"
      >
        <img src={ChevronRight} alt="" />
      </button>
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
