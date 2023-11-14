// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo-Xg_nqEHG7YsR4BUP6jPLW7Pe_66-m8",
  authDomain: "arotec-374911.firebaseapp.com",
  projectId: "arotec-374911", 
  storageBucket: "arotec-374911.appspot.com",
  messagingSenderId: "318225936907",
  appId: "1:318225936907:web:10c299f87fa132fc928d0e",
  measurementId: "G-BQDTJLPEN1"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();