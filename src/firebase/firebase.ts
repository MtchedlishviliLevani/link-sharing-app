// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

//added
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDdfSJ1URdZn3xvG5CcZpRqL4yabC9QLs",
  authDomain: "link-sharing-app-2a022.firebaseapp.com",
  projectId: "link-sharing-app-2a022",
  storageBucket: "link-sharing-app-2a022.firebasestorage.app",
  messagingSenderId: "1057008577606",
  appId: "1:1057008577606:web:1fa9a708f8bdf25e2fee47",
  measurementId: "G-6H2BGN6BPK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const filteStore = getFirestore(app);

//
// const analytics = getAnalytics(app);
export { auth, filteStore };

// new
// Document id  s6UhthMSKBtbJ3o9uaZ7
// 1MAtGfWKwRxuXbwANooP
