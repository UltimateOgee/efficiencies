import React from "react";
import TextField from "@material-ui/core/TextField";
import { DatePicker } from "@material-ui/pickers";

export default function Opponent() {
  return (
    <div>
      <form>
        <TextField id="outlined-basic" label="Opponent" />
      </form>
    </div>
  );
}
