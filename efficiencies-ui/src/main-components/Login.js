import React from "react";
import firebase from "firebase/app";
/*
Tech Spec:
- If no active session - always redirect to login
- If user is loggedin and authorized - proper info should show
*/
export default function Login() {
  return (
    <>
      <div>login page to be built... F in the chat</div>
      <button
        data-testid="signin-anon"
        onClick={() => {
          firebase.auth().signInAnonymously();
        }}
      >
        Login anonymously!
      </button>
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
