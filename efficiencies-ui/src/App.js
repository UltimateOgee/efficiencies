import './App.css';
import firebase from './Firebase.js'

function App() {

  const data = {
    name: 'Los Angeles',
    state: 'CA',
    country: 'USA'
  };
  
  // Add a new document in collection "cities" with ID 'LA'
  const res = await db.collection('cities').doc('LA').set(data);

  return (
    <>
      <div>hello</div>
    </>
  );
}

export default App;
