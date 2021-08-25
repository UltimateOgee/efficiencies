import React from "react";
import firebase from "firebase";
import Header from "./MyTeam/Header"
import Roster from "./MyTeam/Roster"
import Plays from "./MyTeam/Plays"

export default function MyTeam() {
  return (
    <>
      <Header/>
      <br/>
      <Roster/>
      <Plays/>
      <button
        onClick={() => {
          firebase.auth().signOut();
        }}
      >
        Sign Out
      </button>
    </>
  );
}
