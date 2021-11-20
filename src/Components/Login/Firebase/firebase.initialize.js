import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';

const initializeAuthinticatione = () => {
    const app = initializeApp(firebaseConfig);
};

export default initializeAuthinticatione;