// React
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthPage from "./main-components/Auth/AuthPage"
import NewGame from "./main-components/NewGame";
import Analytics from "./main-components/Analytics";
import Games from "./main-components/Games";
import MyTeam from "./main-components/MyTeam";
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
              <Router>
                <div>
                  <nav>
                    <ul>
                      <li>
                        <Link to="/newgame">New Game</Link>
                      </li>
                      <li>
                        <Link to="/analytics">Analytics</Link>
                      </li>
                      <li>
                        <Link to="/games">Games</Link>
                      </li>
                      <li>
                        <Link to="/profile">Profile</Link>
                      </li>
                    </ul>
                  </nav>

                  <hr />
                  <Switch>
                    <Route exact path="/">
                      <div>nothing here right now...</div>
                    </Route>
                    <Route path="/newgame">
                      <NewGame />
                    </Route>
                    <Route path="/analytics">
                      <Analytics />
                    </Route>
                    <Route path="/games">
                      <Games />
                    </Route>
                    <Route path="/profile">
                      <MyTeam />
                    </Route>
                  </Switch>
                </div>
              </Router>
            </IfFirebaseAuthed>
          </FirebaseAppProvider>
        </FirebaseAuthProvider>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
