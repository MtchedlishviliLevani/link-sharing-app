import { auth } from "@/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const signUpWithEmailAndPassword = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (userCredential) {
      {
        await updateProfile(userCredential.user, {
          displayName: name,
        });
      }
    }
    return userCredential.user;
  } catch (error) {
    console.error(error, "something Error");
    throw error;
  }
};

export const loginWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error(error);
  }
};

export const loggout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
};
