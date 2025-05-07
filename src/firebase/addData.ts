import { filteStore, auth } from "@/firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

export const addData = async (collectionName: string, data: object) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("User not authenticated");

    const docRef = await addDoc(collection(filteStore, collectionName), {
      ...data,
      userId: user.uid, // ✅ Add userId here
    });

    console.log("Document written with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding document:", error);
    throw error;
  }
};
