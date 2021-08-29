import firebase from "firebase/app";
import store from './Redux/Store';
import { createFirestoreInstance } from 'redux-firestore'

// Firebase config
export const firebaseConfig = {
  apiKey: "AIzaSyAgcEnJzVuKthqlkwmaqUM0I_-0xmix_S4",
  authDomain: "efficiencies-e21b3.firebaseapp.com",
  projectId: "efficiencies-e21b3",
  storageBucket: "efficiencies-e21b3.appspot.com",
  messagingSenderId: "744703333521",
  appId: "1:744703333521:web:5d576a4f5b3cd318a91b30",
  measurementId: "G-4D8M9E70WK",
};

// react-redux-firebase config
export const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}