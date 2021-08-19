import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function LiveTrackingButtons() {
  const [playType, setPlayType] = React.useState("");

  const handleChange = (event) => {
    setPlayType(event.target.value);
  };
  return (
    <>
      <Grid item xs={8}>
        <Grid container justifyContent="center" spacing={4}>
          <Grid key={0} item>
            <Button variant="contained" color="primary">
              2-Pointer
            </Button>
          </Grid>
          <Grid key={1} item>
            <Button variant="contained" color="primary">
              3-Pointer
            </Button>
          </Grid>
          <Grid key={2} item>
            <Button variant="contained" color="primary">
              Stop
            </Button>
          </Grid>
          <Grid key={3} item>
            <Button variant="contained" color="primary">
              Foul
            </Button>
          </Grid>
          <Grid key={4} item>
            <Button variant="contained" color="secondary">
              Submit
            </Button>
          </Grid>
          <Grid key={5} item>
            <FormControl>
              <InputLabel id="select-label">Play Type</InputLabel>
              <Select
                labelId="select-label"
                id="simple-select"
                value={playType}
                onChange={handleChange}
              >
                <MenuItem>Pick and Roll</MenuItem>
                <MenuItem>ISO</MenuItem>
                <MenuItem>Shubh's Shwabble dabble method</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}