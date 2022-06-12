//When importing packages must pull from compat library

import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import getAnalytics  from "firebase/compat/analytics";
import logEvent  from "firebase/compat/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS07n6zZHALaaCE6_00ZOCrmsOMztLlB0",
  authDomain: "startupshepherd.firebaseapp.com",
  projectId: "startupshepherd",
  storageBucket: "startupshepherd.appspot.com",
  messagingSenderId: "498425093739",
  appId: "1:498425093739:web:1fe3131d1579391fda1b2e",
  measurementId: "G-W7F1ZZGEVY"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
logEvent(analytics, 'screen_view');


export {timestamp};
export default firebaseApp.firestore();
export const db = firebaseApp.firestore();
