import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import AddTableItem from "./AddTableItem";
import { useSelector } from "react-redux";

export default function Roster() {
  // If rosterFields is changed, you must also change interface in RootReducer
  const rosterFields = {
    'Name': [], 
    'Position': ['Guard', 'Small Forward', 'Power Forward', 'Center'], 
    'Height': [], 
    'Year': ['Freshman', 'Sophmore', 'Junior', 'Senior']
  };
  const [roster, setRoster] = useState([]);

  const reduxRoster = useSelector(({ firebase: { profile } }) => profile.roster)
  useEffect(() => {
    setRoster(reduxRoster);
  }, [reduxRoster])

  // TODO Height enforcing numbers
  // Potential table example - https://material-ui.com/components/tables/#ReactVirtualizedTable.js
  return (
    <>
      <Typography variant="h5">
      Roster
      </Typography>
      
      <table>
        <tr>
          {Object.keys(rosterFields).map(field => <th>{field}</th>)}
        </tr>
        
        {
          roster ? roster.map(player => 
            <tr>
              {Object.keys(rosterFields).map(field => 
                <td>{player[field]}</td>
              )}
            </tr>
            ) : 'loading...'
        }

        <AddTableItem fields={rosterFields} type='roster'/>
      </table>
    </>
  );
}