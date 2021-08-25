import React from "react";
import { Typography } from "@material-ui/core";
import firebase from "firebase";

export default function Plays() {
  return (
    <>
      <Typography variant="h5">
      My Plays
      </Typography>
      <table>
        <tr>
          <th>Play Name</th>
          <th>Play Type</th>
          <th>Posesion</th>
        </tr>
        <tr>
          <td>Box and 1</td>
          <td>Zone</td> 
          <td>6'4"</td>
          <td>190lbs</td>
        </tr>
      </table>
    </>
  );
}