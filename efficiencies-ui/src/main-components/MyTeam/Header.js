import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";

export default function Plays() {
  const profile = useSelector(({ firebase: { profile } }) => profile)

  return(
    <>
      <Typography variant="h4">
        Welcome, {profile.teamName}
      </Typography>
      <Typography component={'span'} variant="body1">
        Coach: {profile.coachName}
      </Typography>
    </>
  )
}