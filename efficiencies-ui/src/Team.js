import React from 'react'
import firebase from './Firebase.js'

async function Team() {
    const db = firebase.firestore()
    const snapshot = await db.collection('teams').get();
    console.log(snapshot)
    
    return (
        snapshot.forEach((doc) => {
            <div>{doc.id} : {doc.data()}</div>
          })
    );
}

export default Team;