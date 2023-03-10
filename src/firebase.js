import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
import "firebase/auth"
// ... other firebase imports
const firebaseConfig = {

    apiKey: "AIzaSyCAdfolNq1WskoirrQNg2tWAael1F5so_g",
  
    authDomain: "estudiante-b98f0.firebaseapp.com",
  
    databaseURL: "https://estudiante-b98f0.firebaseio.com",
  
    projectId: "estudiante-b98f0",
  
    storageBucket: "estudiante-b98f0.appspot.com",
  
    messagingSenderId: "221045732027",
  
    appId: "1:221045732027:web:6d7cffc8482f0f3b72af9e"
  
  };
  
export const firebaseApp = initializeApp(firebaseConfig)

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const todosRef = collection(db, 'todos')

export const namesRef = collection(db, 'names')
