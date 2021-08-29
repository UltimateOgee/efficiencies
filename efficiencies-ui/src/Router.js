import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import NewGame from "./main-components/NewGame";
import Analytics from "./main-components/Analytics";
import Games from "./main-components/Games";
import MyTeam from "./main-components/MyTeam";

export default function Router() {
  return (
    <BrowserRouter>
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
              <Link to="/myTeam">My Team</Link>
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
          <Route path="/myTeam">
            <MyTeam />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}