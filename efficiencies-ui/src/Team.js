import React, { useState, useEffect } from "react";
import "firebase/firestore";
import { useFirestoreDocData, useFirestore } from "reactfire";

function Team() {
  //object to hold form data:
  /*const [teamData, setTeamData] = useState({
    teamName: "",
    ownerName: "",
    contactEmail: "",
    username: "",
    password: "",
  });*/

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
  /*
  useEffect(async () => {
    //TODO add status loading somewhere on form...
    //await data being not undefined...
    console.log(status);
    console.log(firstValuePromise);
    let myData = await firstValuePromise;
    console.log(myData);
    setTeamData(myData);
  }, []);

  //second param is optional list to link useEffect too
  useEffect(() => {
    teamRef.set(teamData);
  }, [teamData, teamRef]);
*/
  /*
  TEAM FORM ITEMS:
    - Team name
    - Owner name
    - Contact Email
    - Username
    - Password
  */

  const dataHandler = (event) => {
    //setTeamData({ ...teamData, [event.target.name]: event.target.value });
    teamRef.set({ ...data, [event.target.name]: event.target.value });
  };

  //const { teamName, ownerName, contactEmail, username, password } = data;

  return (
    <form>
      <label>
        Team Name:
        <input
          type="text"
          name="teamName"
          onChange={dataHandler}
          value={data?.teamName ?? ""}
        />
        <br />
        Owner Name:
        <input
          type="text"
          name="ownerName"
          onChange={dataHandler}
          value={data?.ownerName ?? ""}
        />
        <br />
        Contact Email:
        <input
          type="text"
          name="contactEmail"
          onChange={dataHandler}
          value={data?.contactEmail ?? ""}
        />
        <br />
        Username:
        <input
          type="text"
          name="username"
          onChange={dataHandler}
          value={data?.username ?? ""}
        />
        <br />
        Password:
        <input
          type="text"
          name="password"
          onChange={dataHandler}
          value={data?.password ?? ""}
        />
      </label>
    </form>
  );
}

export default Team;
