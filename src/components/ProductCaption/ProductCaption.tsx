type ProductProps = {
  product: {
    name: string;
    caption: string;
  };
};

const ProductCaption = ({ product }: ProductProps) => {
  return (
    <div className="absolute top-1/2 translate-y-[-50%] left-40">
      <h2 className="text-6xl text-white font-semibold mb-1">{product.name}</h2>
      <p className="text-xl text-white font-medium">{product.caption}</p>
      <button
        type="button"
        className="bg-white font-semibold tracking-widest px-8 py-5 mt-4"
      >
        BUY NOW
      </button>
    </div>
  );
};

export default ProductCaption;
