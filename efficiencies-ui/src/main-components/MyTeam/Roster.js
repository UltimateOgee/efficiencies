import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import AddTableItem from "./AddTableItem";
import { useSelector } from "react-redux";

export default function Roster() {
  // If rosterFields is changed, you must also change interface in RootReducer
  const rosterFields = ['Name', 'Position', 'Height', 'Weight'];
  const [roster, setRoster] = useState([]);

  const reduxRoster = useSelector(({ firebase: { profile } }) => profile.roster)
  useEffect(() => {
    setRoster(reduxRoster);
  }, [reduxRoster])

  // Potential table example - https://material-ui.com/components/tables/#ReactVirtualizedTable.js
  return (
    <>
      <Typography variant="h5">
      Roster
      </Typography>
      
      <table>
        <tr>
          {rosterFields.map(field => <th>{field}</th>)}
        </tr>
        {roster ? roster.map(player => 
          <tr>
            {rosterFields.map(field => 
              <td>{player[field] }</td>
            )}
          </tr>
          ) : 'loading...'}

        <AddTableItem fields={rosterFields} type='roster'/>
      </table>
    </>
  );
}