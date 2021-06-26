import './App.css';
import firebase from './Firebase.js'

async function App() {
  const db = firebase.firestore()


  const snapshot = await db.collection('teams').get();
  console.log(snapshot)

  return (
    <>
      <div>hello</div>
    </>
  );
}

export default App;
