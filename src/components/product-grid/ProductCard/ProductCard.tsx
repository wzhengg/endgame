type Props = {
  product: {
    name: string;
    price: number;
    images: string[];
  };
  formatter: Intl.NumberFormat;
};

const ProductCard = ({ product, formatter }: Props) => {
  return (
    <div className="flex flex-col items-center gap-4 cursor-pointer bg-white pb-6">
      <img
        src={product.images[0]}
        alt=""
        className="object-cover w-full h-60"
      />
      <h4 className="text-xs font-medium tracking-widest text-gray-600">
        {product.name.toUpperCase()}
      </h4>
      <p className="text-xs tracking-wider text-gray-600">
        {formatter.format(product.price)}
      </p>
    </div>
  );
};

export default ProductCard;
