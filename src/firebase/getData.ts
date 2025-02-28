import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, filteStore } from "@/firebase/firebase";

export const getData = async (collectionName: string) => {
  try {
    const user = auth.currentUser;
    console.log(user);
    if (!user) {
      console.error("User not authenticated");

      return [];
    }

    const q = query(
      collection(filteStore, collectionName),
      where("userId", "==", user.uid) // Get only user-related data
    );

    const querySnapshot = await getDocs(q);

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
