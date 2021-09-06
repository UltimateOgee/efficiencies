import React from "react";
import firebase from "firebase";
import Header from "./MyTeam/Header"
import Roster from "./MyTeam/Roster"
import Plays from "./MyTeam/Plays"
import Button from "@material-ui/core/Button";

// TODO - Make entries deleteable
export default function MyTeam() {
  return (
    <>
      <Header/>
      <br/>
      <Roster/>
      <Plays/>
      
      <Button
        onClick={() => {
          firebase.auth().signOut();
        }}
        variant="contained"
        size="small"
        color="primary"
        >
        sign out
      </Button>
      
    </>
  );
}
