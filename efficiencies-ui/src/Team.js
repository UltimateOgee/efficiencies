import React, { useState, useEffect } from "react";
import "firebase/firestore";
import { useFirestoreDocData, useFirestore } from "reactfire";

function Team() {
  //object to hold form data:
  const [teamData, setTeamData] = useState({
    teamName: "",
    ownerName: "",
    contactEmail: "",
    username: "",
    password: "",
  });

  // access a document in the firestore database
  const teamRef = useFirestore().collection("teams").doc("testTeam");

  // subscribe to a document for realtime updates
  // status: error, loading, success
  // data: object from database
  const { status, data, firstValuePromise } = useFirestoreDocData(teamRef);

  //update a doc
  //delete data.thirdname;
  //teamRef.set({ ...data, name: "examplename" });

  // easily check the loading status
  // if (status === "loading") {
  //   return <p>Fetching team data...</p>;
  // }

  //FirebaseError: Function DocumentReference.set() called with invalid data. Data must be an object, but it was: undefined (found in document teams/testTeam)
  //https://gitmemory.com/issue/FirebaseExtended/reactfire/320/756446884

  useEffect(async () => {
    //TODO add status loading somewhere on form...
    //await data being not undefined...
    var x = await useFirestore().collection("teams").doc("testTeam").get();
    console.log(x.data());
    setTeamData(x.data());
  }, []);

  //second param is optional list to link useEffect too
  useEffect(() => {
    teamRef.set(teamData);
  }, [teamData, teamRef]);

  /*
  TEAM FORM ITEMS:
    - Team name
    - Owner name
    - Contact Email
    - Username
    - Password
  */

  const dataHandler = (event) => {
    setTeamData({ ...teamData, [event.target.name]: event.target.value });
  };

  return (
    <form>
      <label>
        Team Name:
        <input type="text" name="teamName" onChange={dataHandler} />
        <br />
        Owner Name:
        <input type="text" name="ownerName" onChange={dataHandler} />
        <br />
        Contact Email:
        <input type="text" name="contactEmail" onChange={dataHandler} />
        <br />
        Username:
        <input type="text" name="username" onChange={dataHandler} />
        <br />
        Password:
        <input type="text" name="password" onChange={dataHandler} />
      </label>
    </form>
  );
}

export default Team;
