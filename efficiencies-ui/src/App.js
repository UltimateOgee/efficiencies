// React
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Router from './Router'
import AuthPage from "./main-components/Auth/AuthPage"
import {rrfProps, firebaseConfig} from './Config';

// Firebase Imports
//are these imports correct?
import { FirebaseAppProvider } from "reactfire";
import "firebase/auth";
import 'firebase/firestore' 
import firebase from "firebase/app";

//React-fire
import {
  FirebaseAuthProvider,
  IfFirebaseAuthed,
  IfFirebaseUnAuthed,
} from "@react-firebase/auth";

//Redux-firebase
import { Provider } from 'react-redux'
import store from './Redux/Store'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'



// Initialize firebase instance
firebase.initializeApp(firebaseConfig)
firebase.firestore()

// TODO - Charts? - https://www.chartjs.org/docs/latest/
function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
          <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <IfFirebaseUnAuthed>
              <AuthPage />
            </IfFirebaseUnAuthed>
            <IfFirebaseAuthed>
              <Router />
            </IfFirebaseAuthed>
          </FirebaseAppProvider>
        </FirebaseAuthProvider>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
