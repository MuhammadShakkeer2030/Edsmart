import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAoAp15pp3ATlXWVGesfXLZWVuIDGEF57Y",
  authDomain: "eds-react-fire.firebaseapp.com",
  projectId: "eds-react-fire",
  storageBucket: "eds-react-fire.appspot.com",
  messagingSenderId: "1067213878498",
  appId: "1:1067213878498:web:dd527598c07fb5a1041abb",
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}