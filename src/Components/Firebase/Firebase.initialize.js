import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAuthintication = () => {
    const app = initializeApp(firebaseConfig)
};

export default initializeAuthintication();