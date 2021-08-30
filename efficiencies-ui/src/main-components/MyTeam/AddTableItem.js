import {React, useState} from "react";
import { useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import Button from "@material-ui/core/Button";


export default function AddTableItem(props) {
  const firebase = useFirebase()
  const profile = useSelector(state => state.firebase.profile)
  const [newItemInfo, setNewItemInfo] = useState({}) 
  const [isDisabled, setIsDisabled] = useState(false);

  const updateProfile = () => {
    const updatedField = {}
    updatedField[props.type] = [...profile[props.type], newItemInfo]
    firebase.updateProfile(updatedField);
    
    const fields = document.getElementsByClassName('field');
    Array.prototype.map.call(fields,
      field => field.value = ''
    );

    setNewItemInfo({});
    enableComponents();
  }

  const enableComponents = () => {
    setIsDisabled(false);
  }

  const handleSubmitClicked = () => {
    setIsDisabled(true);
    updateProfile();
  }
  
  return(
    <tr>
      {props.fields.map( field =>
        <td>
          <input 
          type='text'
          class='field' 
          id={field}
          onChange={(event) => {
            const changeField = {}
            changeField[field] = event.target.value;
            setNewItemInfo(Object.assign(newItemInfo, changeField));
          }}
          ></input>
        </td> 
      )}
      
      <td>
        <Button
        disabled={isDisabled}
        onClick={handleSubmitClicked.bind(this)}
        variant="contained"
        size="small"
        color="secondary"
        >
        add
        </Button>
      </td>    
    </tr>
  )
}