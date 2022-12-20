import { useNavigate } from "react-router-dom";

type ProductProps = {
  product: {
    id: string;
    name: string;
    description: string;
  };
};

const ProductCaption = ({ product }: ProductProps) => {
  const navigate = useNavigate();

  return (
    <div className="absolute top-1/2 translate-y-[-50%] left-40">
      <h2 className="text-6xl text-white font-semibold mb-1">{product.name}</h2>
      <p className="text-xl text-white font-medium">{product.description}</p>
      <button
        type="button"
        onClick={() => navigate(`/products/${product.id}`)}
        className="bg-white font-semibold tracking-widest px-8 py-5 mt-4"
      >
        BUY NOW
      </button>
    </div>
  );
};

export default ProductCaption;
