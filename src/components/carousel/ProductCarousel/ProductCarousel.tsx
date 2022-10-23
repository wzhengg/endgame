import { useState } from "react";
import CircleActive from "../../../assets/icons/circle-fill.svg";
import CircleOutline from "../../../assets/icons/circle-outline.svg";
import CarouselArrow from "../CarouselArrow/CarouselArrow";
import ProductCaption from "../ProductCaption/ProductCaption";

type CarouselProps = {
  data: {
    name: string;
    desc: string;
    img: string;
  }[];
};

const ProductCarousel = ({ data }: CarouselProps) => {
  const [index, setIndex] = useState(0);

  const prevImg = () =>
    setIndex(index === 0 ? data.length - 1 : index - 1);
  const nextImg = () => setIndex((index + 1) % data.length);
  const goToImg = (index: number) => setIndex(index);

  return (
    <div className="relative h-screen w-screen">
      <img
        src={data[index].img}
        alt={data[index].name}
        className="object-cover object-center h-full w-full brightness-90"
        data-testid="product-img"
      />
      <ProductCaption product={data[index]} />
      <CarouselArrow onClick={prevImg} direction="left" />
      <CarouselArrow onClick={nextImg} direction="right" />
      <div
        className="absolute left-1/2 translate-x-[-50%] bottom-3 flex gap-2"
        data-testid="indicators"
      >
        {data.map((_imgs, i) => (
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
