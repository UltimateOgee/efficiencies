import "./App.css";
import Team from "./Team";
import { FirebaseAppProvider } from "reactfire";

let firebaseConfig = {
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
      <Team />
    </FirebaseAppProvider>
  );
}

export default App;
