import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import firebase from "firebase";
import AddTableItem from "./AddTableItem";
import { useDispatch } from "react-redux";
import { addRoster } from "../../Redux/UserSlice";

export default function Roster() {
  const [roster, setRoster] = useState([
    {
      'name': 'Emerson Spradling',
      'position': 'Small Forward',
      'height': '6\'4\"',
      'weight': '190lbs'
    }
  ])
  
  // Potential table example - https://material-ui.com/components/tables/#ReactVirtualizedTable.js
  return (
    <>
      <Typography variant="h5">
      Roster
      </Typography>
      <table>
        <tr>
          <th>Player Name</th>
          <th>Position</th>
          <th>Height</th> 
          <th>Weight</th>
        </tr>
        {roster.map(p => <tr><td>{p.name}</td><td>{p.position}</td><td>{p.height}</td><td>{p.weight}</td></tr>)}
        <AddTableItem onClickHandler='props'/>
      </table>
    </>
  );
}