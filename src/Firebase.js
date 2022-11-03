import { initializeApp } from "firebase/app";   
import { getFirestore} from '@firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAil8a4sG2vGMmOGrYjFji18ec542yuxno",
  authDomain: "fir-react-bc9b5.firebaseapp.com",
  projectId: "fir-react-bc9b5",
  storageBucket: "fir-react-bc9b5.appspot.com",
  messagingSenderId: "893466154030",
  appId: "1:893466154030:web:6dc7029e799c3d131dfbbf",
  measurementId: "G-6H2V9SMWSD"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);