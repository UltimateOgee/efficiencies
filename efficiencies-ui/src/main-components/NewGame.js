import React from "react";
import Opponent from "./NewGame/Opponent";
import { Divider } from "@material-ui/core";
import LiveTracking from "./NewGame/LiveTracking";
import BarChart from "./NewGame/BarChart";
import EfficiencyTable from "./NewGame/EfficiencyTable";

export default function NewGame() {
  return (
    <>
      <Opponent />
      <Divider variant="middle" />
      <LiveTracking />
      <BarChart 
      id='2s' 
      labels={['5-Out', 'Horns', '4-Out', 'Pick&Roll', 'Iso']}
      title='2s'
      data={[10, 8, 7, 2, 1]}
      />
      <EfficiencyTable 
      entries={[
        {name: 'Man', efficiency: 0.83, history: ['X','F', '3', 'X', 'X']},
        {name: '2-3', efficiency: 0.38, history: ['2','X', '3', '3', 'X']},
        {name: '3-2', efficiency: 0.29, history: ['3','F', 'F', '3', '2']},
        {name: '1-3-1', efficiency: 0.26, history: ['2','F', 'F', '3', 'F']},
      ]}
      />
    </>
  );
}
