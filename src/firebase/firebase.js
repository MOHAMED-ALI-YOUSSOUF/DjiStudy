// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDwVOGLVCPzKaaum1LLDhjcEQ4sHnkfdfw",
  authDomain: "djib-study.firebaseapp.com",
  projectId: "djib-study",
  storageBucket: "djib-study.appspot.com",
  messagingSenderId: "251634843764",
  appId: "1:251634843764:web:031ab65f006a4b22781121",
  measurementId: "G-DEHSGZ248F"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
const analytics = getAnalytics(app);


