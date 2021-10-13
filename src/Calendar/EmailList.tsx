import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";
import { config } from "./firestore.json";

const firebaseConfig = config;
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

type feedback = {
  email: string;
  feedback: string;
};

export async function addFeedback() {
  try {
    const docRef = await addDoc(collection(db, "feedback"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export {};

function isValidEmail(email: string) {
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return true;
  } else {
    return false;
  }
}
