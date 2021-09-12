import React from "react";
import Opponent from "./NewGame/Opponent";
import { Divider } from "@material-ui/core";
import LiveTracking from "./NewGame/LiveTracking";
import BarChart from "./NewGame/BarChart";

export default function NewGame() {
  return (
    <>
      <Opponent />
      <Divider variant="middle" />
      <LiveTracking />
      <BarChart />
    </>
  );
}
