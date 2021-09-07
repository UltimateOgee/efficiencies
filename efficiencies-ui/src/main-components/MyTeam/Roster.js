import React, { useEffect, useState } from "react";
import { useFirebase } from 'react-redux-firebase'
import { Typography } from "@material-ui/core";
import AddTableItem from "./AddTableItem";
import { useSelector } from "react-redux";

export default function Roster() {
  const firebase = useFirebase()
  const [isDisabled, setIsDisabled] = useState(false);
  // If rosterFields is changed, you must also change interface in RootReducer
  const rosterFields = {
    'Player Name': [], 
    'Position': ['Guard', 'Small Forward', 'Power Forward', 'Center'], 
    'Height': [], 
    'Year': ['Freshman', 'Sophmore', 'Junior', 'Senior']
  };
  const [roster, setRoster] = useState([]);

  const reduxRoster = useSelector(({ firebase: { profile } }) => profile.roster)
  useEffect(() => {
    setRoster(reduxRoster);
  }, [reduxRoster])

  const enableComponents = () => {
    setIsDisabled(false);
  }
  // TODO - make a button wrapper?
  const handleSubmitClicked = (index) => {
    setIsDisabled(true);
    deleteEntry(index);
  }

  const deleteEntry = index => {
    const newRoster = roster.slice();
    newRoster.splice(index, 1);
    
    const updatedField = {};
    updatedField['roster'] = newRoster;
    firebase.updateProfile(updatedField);
    
    enableComponents();
  }


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
          roster ? roster.map((player, i) => 
            <tr id={i}>
              {Object.keys(rosterFields).map(field => 
                <td>{player[field]}</td>
              )}
              <td>
                <button 
                  disabled={isDisabled}
                  onClick={handleSubmitClicked.bind(this, i)}
                >
                  Delete
                </button>
              </td>
            </tr>
            ) : 'loading...'
        }

        <AddTableItem fields={rosterFields} type='roster'/>
      </table>
    </>
  );
}