import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA5MrWmfT8S535_7TwfWIYfKnvydEgfOYs",
  authDomain: "imagewaves-ecfb5.firebaseapp.com",
  projectId: "imagewaves-ecfb5",
  storageBucket: "imagewaves-ecfb5.appspot.com",
  messagingSenderId: "755440749668",
  appId: "1:755440749668:web:e778188c0138899e26e371"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);