import './App.css';
import firebase from './Firebase.js'

async function App() {
  const db = firebase.firestore()


  const snapshot = await db.collection('teams').get();
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });

  return (
    <>
      <div>hello</div>
    </>
  );
}

export default App;
