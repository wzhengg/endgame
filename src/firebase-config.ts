import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBTok1GrRiGa55W5E83ZNRmlzWUaVbYkQE",
  authDomain: "endgame-5e9ac.firebaseapp.com",
  projectId: "endgame-5e9ac",
  storageBucket: "endgame-5e9ac.appspot.com",
  messagingSenderId: "685832735318",
  appId: "1:685832735318:web:31a7a9675e35fdb4d589f7",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
