import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

import firebaseConfig from "./../../firebaseConfig.js"

const app = initializeApp(firebaseConfig);

const db = getFirestore()

export { app, db }