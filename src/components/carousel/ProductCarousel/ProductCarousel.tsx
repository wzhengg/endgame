import { useState } from "react";
import CircleActive from "../../../assets/icons/circle-fill.svg";
import CircleOutline from "../../../assets/icons/circle-outline.svg";
import CarouselArrow from "../CarouselArrow/CarouselArrow";
import ProductCaption from "../ProductCaption/ProductCaption";

type CarouselProps = {
  data: {
    id: string;
    name: string;
    description: string;
    image: string;
  }[];
};

const ProductCarousel = ({ data }: CarouselProps) => {
  const [index, setIndex] = useState(0);

  const prevImg = () => setIndex(index === 0 ? data.length - 1 : index - 1);
  const nextImg = () => setIndex((index + 1) % data.length);
  const goToImg = (index: number) => setIndex(index);

  return data.length !== 0 ? (
    <div className="relative h-screen w-screen">
      <img
        src={data[index].image}
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
        {data.map((obj, i) => (
          <button
            type="button"
            key={obj.id}
            onClick={() => goToImg(i)}
            className="w-6 h-6"
          >
            <img src={index === i ? CircleActive : CircleOutline} alt="" />
          </button>
        ))}
      </div>
    </div>
  ) : (
    <h3 className="w-full font-semibold tracking-widest text-gray-700 text-center my-6">
      LOADING...
    </h3>
  );
};

export default ProductCarousel;
