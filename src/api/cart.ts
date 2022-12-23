import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { Product, getProduct } from "./products";

const COLLECTION = "users";

export type CartItem = {
  productId: string;
  quantity: number;
};

export type PopulatedCartItem = {
  product: Product | null;
  quantity: number;
};

export async function getCart(userId: string) {
  const userRef = doc(db, COLLECTION, userId);
  const userSnap = await getDoc(userRef);
  const data = userSnap.data();
  return data!.cart;
}

export async function updateCart(userId: string, cart: CartItem[]) {
  const userRef = doc(db, COLLECTION, userId);
  await updateDoc(userRef, { cart });
}

export async function populateCart(cart: CartItem[]) {
  const populatedCart = [];
  for (const item of cart) {
    populatedCart.push({
      product: await getProduct(item.productId),
      quantity: item.quantity,
    });
  }
  return populatedCart;
}
