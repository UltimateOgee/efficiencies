import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "firebase/app";
import { useSelector } from "react-redux";

export default function LiveTrackingButtons(props) {
  const [playType, setPlayType] = useState("");

  const [plays, setPlays] = useState([]);
  const reduxPlays = useSelector(({ firebase: { profile } }) => profile.plays)
  useEffect(() => {
    if(reduxPlays){
      const filteredPlays = props.possession === 'Offense' ? 
        reduxPlays.filter(p => p.Possession === 'o') :
        reduxPlays.filter(p => p.Possession === 'd')
      setPlays(filteredPlays);
    } else{
      setPlays(reduxPlays);
    } 
  }, [reduxPlays])

  const deleteLatestData = () => {
    alert("not implemented");
    //check these I think it might help in deleting the last entry made...
    //https://firebase.google.com/docs/firestore/query-data/order-limit-data
    //https://firebase.google.com/docs/firestore/manage-data/delete-data

    //or maybe we need to do it differently altogether.
  };

  const addData = (result) => {
    const db = firebase.firestore();
    /*db.settings({
      timestampsInSnapshots: true,
    });*/
    //this would be a useful setting but it ended up being an end-all-be-all
    //might want to see if it can be configured to only be turned on here.
    //const currDate = new Date().getTime();
    var currDate = new Date(Number(new Date()));
    let tempPlay = "";
    tempPlay = playType;
    if (tempPlay === "") {
      //this should be interally announced rather than a simple alert later...
      alert("You must pick a play type to log this outcome!");
    } else {
      db.collection("liveTrackingData").add({
        date: currDate,
        playType: tempPlay,
        outcome: result,
        possession: props.possession,
      });
      //this should be interally announced rather than a simple alert later...
      alert(`Data logged (time omitted but stored):
      date: ${currDate.toDateString()},
      playType: ${tempPlay},
      outcome: ${result},
      possession: ${props.possession}`);
    }
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
  }));

  const handleChange = (event) => {
    setPlayType(event.target.value);
  };

  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container justifyContent="center" spacing={8}>
          <Grid key={0} item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                addData("2-Pointer");
              }}
            >
              2-Pointer
            </Button>
          </Grid>
          <Grid key={1} item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                addData("3-Pointer");
              }}
            >
              3-Pointer
            </Button>
          </Grid>
          <Grid key={2} item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                addData("Stop");
              }}
            >
              Stop
            </Button>
          </Grid>
          <Grid key={3} item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                addData("Foul");
              }}
            >
              Foul
            </Button>
          </Grid>
          <Grid key={4} item>
            <FormControl style={{ minWidth: 300 }}>
              <InputLabel id="select-label">Play Type</InputLabel>
              <Select
                labelId="select-label"
                id="simple-select"
                value={playType}
                onChange={handleChange}
              >
                {plays ? plays.map(p => {
                  return(<MenuItem value={p.Name}>{p.Name}</MenuItem>)
                }) : null}
              </Select>
            </FormControl>
          </Grid>
          <Grid key={5} item>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                deleteLatestData();
              }}
            >
              Delete Last Entry
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
