import './App.css';
import firebase from './Firebase.js'

function App() {

  const data = {
    name: 'Los Angeles',
    state: 'CA',
    country: 'USA'
  };
  
  // Add a new document in collection "cities" with ID 'LA'
  var db = firebase.firestore();
  const res = db.collection('teams').doc('teamId').set(data);

  return (
    <>
      <div>hello</div>
    </>
  );
}

export default App;
