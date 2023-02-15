import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAG_bCJJzUBdUDeVrP4zL0ft_gzr_H3Zdk",
  authDomain: "mymeals-50fb9.firebaseapp.com",
  projectId: "mymeals-50fb9",
  storageBucket: "mymeals-50fb9.appspot.com",
  messagingSenderId: "468232749852",
  appId: "1:468232749852:web:1d431d4b3bbccd055730d9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
