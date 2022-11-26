import { useState, useEffect, useMemo } from "react";
import { collection, getDocs, QuerySnapshot } from "firebase/firestore";
import { db } from "../../firebase-config";

type Keyboard = {
  id: string;
  name: string;
  price: number;
  images: string[];
};

const ProductsLayout = () => {
  const [keyboards, setKeyboards] = useState<Keyboard[]>([]);

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }),
    []
  );

  const getKeyboards = async () => {
    try {
      const newKeyboards: Keyboard[] = [];
      const querySnapshot = (await getDocs(
        collection(db, "keyboards")
      )) as QuerySnapshot<{ name: string; price: number; images: string[] }>;
      querySnapshot.forEach((doc) => {
        newKeyboards.push({ id: doc.id, ...doc.data() });
      });
      setKeyboards(newKeyboards);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getKeyboards();
  }, []);

  return (
    <div className="bg-gray-100 p-20">
      <div className="grid grid-cols-5 gap-6">
        {keyboards.map((keyboard) => (
          <div
            key={keyboard.id}
            className="flex flex-col items-center gap-3 pb-3 shadow-md rounded-md overflow-hidden"
          >
            <img
              src={keyboard.images[0]}
              alt=""
              className="object-cover w-full h-52"
            />
            <h3 className="font-semibold tracking-widest text-gray-600">
              {keyboard.name.toUpperCase()}
            </h3>
            <p className="text-sm tracking-wider text-gray-600">
              {formatter.format(keyboard.price)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsLayout;
