import React from "react";
import Team from "../Team";
import firebase from "firebase";

export default function Profile() {
  return (
    <>
      <div>above team more stuff</div>
      <Team />
      <div>below team more stuff</div>
      <div>Log Out:</div>
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
