import React from 'react'
import firebase from './Firebase.js'

async function Team() {
    const db = firebase.firestore()
    const snapshot = await db.collection('teams').get();
    console.log(snapshot)
    snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });
    return (
        <div>
            
        </div>
    )
}

export default Team;