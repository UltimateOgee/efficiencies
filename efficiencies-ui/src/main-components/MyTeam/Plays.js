import React, { useEffect, useState } from "react";
import { useFirebase } from 'react-redux-firebase'
import { Typography } from "@material-ui/core";
import AddTableItem from "./AddTableItem";
import { useSelector } from "react-redux";

export default function Plays() {
  const firebase = useFirebase()
  const [isDisabled, setIsDisabled] = useState(false);
  
  // TODO - Found 2 elements with non-unique id #Name
  // If playFields is changed, you must also change interface in RootReducer
  const playFields = {
    'Name': [], 
    'Type': ['Zone', 'Man-to-Man', '4-out'], 
    'Possession': []
  };
  const [plays, setPlays] = useState([]);

  const reduxPlays = useSelector(({ firebase: { profile } }) => profile.plays)
  useEffect(() => {
    setPlays(reduxPlays);
  }, [reduxPlays])

  const enableComponents = () => {
    setIsDisabled(false);
  }

  const handleSubmitClicked = (index) => {
    setIsDisabled(true);
    deleteEntry(index);
  }

  const deleteEntry = index => {
    const newPlays = plays.slice();
    newPlays.splice(index, 1);
    
    const updatedField = {};
    updatedField['plays'] = newPlays;
    firebase.updateProfile(updatedField);
    
    enableComponents();
  }

  // Potential table example - https://material-ui.com/components/tables/#ReactVirtualizedTable.js
  return (
    <>
      <Typography variant="h5">
      Plays
      </Typography>
      
      <Typography variant="h5">
      Offense
      </Typography>

      <table>
        <tr>
          {Object.keys(playFields).map(field => field === 'Possession' ? null : <th>{field}</th>)}
        </tr>
        
        {
          plays ? plays.map((play, i) => {
            if (play.Possession === 'o') {
              return(
                <tr>
                  {Object.keys(playFields).map(field => 
                    field === 'Possession' ? null : <td>{play[field]}</td>
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
              )
            }else return null
          }) : 'loading...'
        }

        <AddTableItem fields={{...playFields, 'Possession': ['o']}} type='plays'/>
      </table>

      <Typography variant="h5">
      Defence
      </Typography>

      <table>
        <tr>
          {Object.keys(playFields).map(field => field === 'Possession' ? null : <th>{field}</th>)}
        </tr>
        
        {
          plays ? plays.map((play, i) => {
            if (play.Possession === 'd') {
              return(
                <tr>
                  {Object.keys(playFields).map(field => 
                    field === 'Possession' ? null : <td>{play[field]}</td>
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
              )
            }else return null
          }) : 'loading...'
        }

        <AddTableItem fields={{...playFields, 'Possession': ['d']}} type='plays'/>
      </table>
    </>
  );
}