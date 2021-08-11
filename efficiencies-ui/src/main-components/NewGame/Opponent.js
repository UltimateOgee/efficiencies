import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

export default function Opponent() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <form>
        <TextField id="outlined-basic" label="Opponent" />
        <TextField
          id="date"
          label="Birthday"
          type="date"
          defaultValue={date}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    </div>
  );
}
