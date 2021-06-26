import './App.css';
import firebase from './Firebase.js'

function App() {
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
