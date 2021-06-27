import React from "react";
import {
  useFirestoreDocData,
  useFirestore,
} from "reactfire";

function Team() {

  // easily access the Firestore library
  const teamRef = useFirestore().collection("teams").doc("0skt5e2jNhjKlVh1mFoB");

  // subscribe to a document for realtime updates. just one line!
  const { status, data } = useFirestoreDocData(teamRef);

  // easily check the loading status
  if (status === "loading") {
    return <p>Fetching team data...</p>;
  }

  return <p>The team name is {data.name}!</p>;
}

export default Team;
