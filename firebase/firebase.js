
import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    onAuthStateChanged,
    createUserWithEmailAndPassword,   
    signInWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailLink 
    //read data from Firebase    
} from "firebase/auth"
//ref = reference to a "collection"
// import { 
//     getDatabase, 
//     ref as firebaseDatabaseRef, 
//     set as firebaseSet,
//     child,
//     get,
//     onValue,
// } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyDXJanD7oryjrM3S8P0PQe_m1Ls9uJ23z4",
    authDomain: "homecarev2-905d7.firebaseapp.com",
    databaseURL: "https://homecarev2-905d7-default-rtdb.firebaseio.com",
    projectId: "homecarev2-905d7",
    storageBucket: "homecarev2-905d7.appspot.com",
    appId: '1:1016006517165:android:0982c8c27f37ffda61c124',
    messagingSenderId: "1016006517165",
}

const app = initializeApp(firebaseConfig);
const auth = getAuth();
// const firebaseDatabase = getDatabase()
debugger
export {
    auth,
    // firebaseDatabase,
    createUserWithEmailAndPassword,
    // onAuthStateChanged,
    // firebaseSet,
    // firebaseDatabaseRef,
    sendEmailVerification,
    signInWithEmailLink
    // child,
    // get,
    // onValue, //reload when online DB changed
    // signInWithEmailAndPassword,
}