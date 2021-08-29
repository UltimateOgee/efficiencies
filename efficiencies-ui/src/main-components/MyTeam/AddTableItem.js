import React from "react";
import Button from "@material-ui/core/Button";

export default function AddTableItem(props) {
  return(
    <tr>
      <td>
        <Button
        variant="contained"
        size="small"
        color="secondary"
        >
        add
        </Button>
      </td>
      <td><input type='text'></input></td> 
      <td><input type='text'></input></td> 
      <td><input type='text'></input></td> 
    </tr>
  )
}