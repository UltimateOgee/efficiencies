import Team from "./Team";
import { FirebaseAppProvider } from "reactfire";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./main-components/Login";
import NewGame from "./main-components/NewGame";
import Analytics from "./main-components/Analytics";
import Games from "./main-components/Games";
import Profile from "./main-components/Profile";

const firebaseConfig = {
  apiKey: "AIzaSyAgcEnJzVuKthqlkwmaqUM0I_-0xmix_S4",
  authDomain: "efficiencies-e21b3.firebaseapp.com",
  projectId: "efficiencies-e21b3",
  storageBucket: "efficiencies-e21b3.appspot.com",
  messagingSenderId: "744703333521",
  appId: "1:744703333521:web:5d576a4f5b3cd318a91b30",
  measurementId: "G-4D8M9E70WK",
};

function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
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
              <Login />
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
              <Profile />
            </Route>
          </Switch>
        </div>
      </Router>
    </FirebaseAppProvider>
  );
}

export default App;
