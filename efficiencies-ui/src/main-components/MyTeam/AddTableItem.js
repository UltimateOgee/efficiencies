import {React, useState} from "react";
import { useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import Button from "@material-ui/core/Button";

// Props
//    fields - {fieldName: Values[],...}
//    if values.length == 0 -> text input
//    if values.length == 1 -> dont display input and default for input
//    if values.length > 1 -> dropdown selector 
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
      {Object.keys(props.fields).map(field => {
        const values = props.fields
        if (values[field].length === 0){
          return(
            <td key={'input' + field}>
              <input 
              type='text'
              className='field' 
              id={field}
              onChange={(event) => {
                const changeField = {}
                changeField[field] = event.target.value;
                setNewItemInfo(Object.assign(newItemInfo, changeField));
              }}
              ></input>
            </td>
          )
        } else if ((values[field].length === 1)) {
          if (!(field in newItemInfo)){
            const changeField = {}
            changeField[field] = values[field][0];
            setNewItemInfo(Object.assign(newItemInfo, changeField));
          }
          return null
        } else {
          const options = values[field].map(option => {
            return(<option value={option} key={option}>{option}</option>)
          });

          return (
            <td key='addTableItem'>
              <select 
              className='field' 
              id={field}
              onChange={(event) => {
                const changeField = {}
                changeField[field] = event.target.value;
                setNewItemInfo(Object.assign(newItemInfo, changeField));
              }}
              >
                {options}
              </select>
            </td>
          )
        }
      })}
      
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