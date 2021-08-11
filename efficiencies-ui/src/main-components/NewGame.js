import React from "react";
import Opponent from "./NewGame/Opponent";
import { Divider } from "@material-ui/core";
import LiveTracking from "./NewGame/LiveTracking";

export default function NewGame() {
  return (
    <>
      <Opponent />
      <Divider variant="middle" />
      <LiveTracking />
    </>
  );
}
