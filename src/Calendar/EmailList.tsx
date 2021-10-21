import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";
import { config } from "./firestore.json";

const firebaseConfig = config;
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

type Feedback = {
  email: string;
  feedback: string;
};

export async function addFeedback(feedback: Feedback) {
  try {
    const docRef = await addDoc(collection(db, "feedback"), {
      email: feedback.email,
      feedback: feedback.feedback,
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
