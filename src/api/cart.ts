import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const COLLECTION = "users";

export type CartItem = {
  productId: string;
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
