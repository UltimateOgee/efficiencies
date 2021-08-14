import React from "react";
import "firebase/firestore";
import { useFirestoreDocData, useFirestore } from "reactfire";

function Team() {
  // access a document in the firestore database
  const teamRef = useFirestore().collection("teams").doc("testTeam");

  const { status, data, firstValuePromise } = useFirestoreDocData(teamRef);

  const dataHandler = (event) => {
    teamRef.set({ ...data, [event.target.name]: event.target.value });
  };

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
