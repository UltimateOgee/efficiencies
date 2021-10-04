import React, { useEffect, useState } from "react";
import Opponent from "./NewGame/Opponent";
import { Divider } from "@material-ui/core";
import LiveTracking from "./NewGame/LiveTracking";
import BarChart from "./NewGame/BarChart";
import EfficiencyTable from "./NewGame/EfficiencyTable";
import { useSelector } from "react-redux";
import firebase from "firebase/app";

export default function NewGame() {
  // Gets collection from firestore, adds it to redux
  const uid = useSelector(state => state.firebase.auth.uid)
  // useFirestoreConnect([
  //   { 
  //     collection: 'liveTrackingData',
  //     doc: uid
  //   }
  // ])

  const [opponent, setOpponent] = useState("");
  const possession = "Offense" // TODO - change with selected possession
  const db = firebase.firestore();
  // Query for all live tracking entries for current user\
  // How many docs should we be listening to - https://firebase.google.com/docs/firestore/best-practices
  let liveTrackingData = [];
  const liveTrackingListener = db.collection("liveTrackingData").where("uid", "==", uid).where("opponent", "==", opponent)
    .where("possession", "==", possession).onSnapshot( snapshot => {
      let data = [];
      snapshot.forEach(doc => {
        data.push(doc.data());
      });
      liveTrackingData = data;
    });

  useEffect(() => {
    // OnUnmount unsubscribe from this query
    return () => {
      liveTrackingListener()
    }
  })



  return (
    <>
      <Opponent setOpponent={setOpponent}/>
      <Divider variant="middle" />
      <LiveTracking opponent={opponent}/>
      <BarChart 
      id='2s' 
      labels={['5-Out', 'Horns', '4-Out', 'Pick&Roll', 'Iso']}
      title='2s'
      data={[10, 8, 7, 2, 1]}
      />
      <EfficiencyTable 
      possession={possession}
      data={[
        {name: 'Man', efficiency: 0.83, history: ['X','F', '3', 'X', 'X']},
        {name: '2-3', efficiency: 0.38, history: ['2','X', '3', '3', 'X']},
        {name: '3-2', efficiency: 0.29, history: ['3','F', 'F', '3', '2']},
        {name: '1-3-1', efficiency: 0.26, history: ['2','F', 'F', '3', 'F']},
      ]}
      />
    </>
  );
}
