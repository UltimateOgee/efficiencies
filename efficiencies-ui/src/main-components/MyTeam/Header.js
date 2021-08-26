import React from "react";
import { Typography } from "@material-ui/core";
import firebase from "firebase";

export default function Plays() {
  return(
    <>
      <Typography variant="h4">
        Trinity Tigers
      </Typography>
      <Typography component={'span'} variant="body1">
        Coach E-Money$
      </Typography>
    </>
  )
}