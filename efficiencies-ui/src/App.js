// React
import {rrfProps, firebaseConfig} from './Config';
import Router from './Router'
import AuthPage from "./main-components/Auth/AuthPage"

// Firebase Imports
import { FirebaseAppProvider } from "reactfire";
import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore' 

//React-fire
import {
  FirebaseAuthProvider,
  IfFirebaseAuthed,
  IfFirebaseUnAuthed,
} from "@react-firebase/auth";

//Redux-firebase
import store from './Redux/Store'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

// Initialize firebase instances
// TODO - Initializes twice in redux???
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
