import { filteStore, auth } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export const getSingleDoc = async (id: string) => {
  const user = auth.currentUser;
  if (!user) throw new Error("User not authenticated");

  try {
    const docRef = doc(filteStore, "userLink2", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists() && docSnap.data().userId === user.uid) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document or insufficient permissions!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching document:", error);
    throw error;
  }
};
