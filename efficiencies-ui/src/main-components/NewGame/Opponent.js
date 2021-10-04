import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";

export default function Opponent(props) {
  //for some reason the date is one day ahead... WHY?
  let curr = new Date();
  let date = curr.toISOString().substr(0, 10);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        New Game
      </Typography>
      <Divider variant="middle" />
      <form>
        <br />
        <TextField id="outlined-basic" label="Opponent" onChange={(event) => props.setOpponent(event.target.value)}/>
        <TextField
          id="date"
          label="Game Date"
          type="date"
          defaultValue={date}
          disabled={true}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    </div>
  );
}
