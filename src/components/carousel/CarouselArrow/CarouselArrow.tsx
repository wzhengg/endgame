import ChevronLeft from "../../../assets/icons/chevron-left.svg";
import ChevronRight from "../../../assets/icons/chevron-right.svg";

type ArrowProps = {
  onClick: () => void;
  direction: "left" | "right";
};

const CarouselArrow = ({ onClick, direction }: ArrowProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute top-1/2 translate-y-[-50%] ${direction}-4 w-14 h-14`}
    >
      <img src={direction === "left" ? ChevronLeft : ChevronRight} alt="" />
    </button>
  );
};

export default CarouselArrow;
