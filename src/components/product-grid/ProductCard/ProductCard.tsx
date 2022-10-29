type Props = {
  product: {
    name: string;
    price: number;
    imgs: string[];
  };
  formatter: Intl.NumberFormat;
};

const ProductCard = ({ product, formatter }: Props) => {
  return (
    <div className="flex flex-col items-center gap-4 cursor-pointer">
      <img src={product.imgs[0]} alt="" />
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
