import React, {useState} from 'react'
import firebase from './Firebase.js'

function Team() {
    const [teams, setTeams] = useState([])


    const db = firebase.firestore()
    db.collection('teams').get().then(response => setTeams(response));

    
    return (
       <div>{{teams}}</div>
    );
}

export default Team;