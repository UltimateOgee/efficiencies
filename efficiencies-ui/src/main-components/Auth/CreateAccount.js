import {React, useState} from "react";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import firebase from "firebase/app";
import { useSelector, useDispatch } from 'react-redux';
import { setUID } from "../../Redux/UserSlice";

export default function CreateAccount() {
  const [userInfo, setUserInfo] = useState({});
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch()

  const createAccount = () => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
    .then(() => {
      firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
      .then((userCredential) => {
        userCredential.additionalUserInfo.isNewUser = true;
        userCredential.additionalUserInfo.profile = {coachName: userInfo.coachName, teamname: userInfo.teamName}
        dispatch(setUID(userCredential.user.uid))
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if(errorCode === 'auth/weak-password'){
          setPasswordError(errorMessage);
          setShowPasswordError(true);
          setShowEmailError(false);
        }
        if(errorCode === 'auth/invalid-email'){
          setEmailError(errorMessage);
          setShowEmailError(true);
          setShowPasswordError(false);
        }
        if(errorCode === 'auth/email-already-in-use'){
          setEmailError(errorMessage);
          setShowEmailError(true);
          setShowPasswordError(false);
        }
        enableComponents();
      });
    })
    .catch((error) => {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorMessage = error.message;
      enableComponents()
      console.log(errorMessage);
    });;
  };

  //https://www.pluralsight.com/guides/binding-functions-and-enabledisable-state-in-html-buttons-with-reactjs
  const enableComponents = () => {
    setIsDisabled(false);
  }

  const handleSubmitClicked = () => {
    setIsDisabled(true);
    createAccount();
  }

  // TODO - add material ui text box error
  return (
    <>
      <Typography variant="h4">
      Create your Efficiencies Account
      </Typography>

      <form>
        <Typography color="error" variant="body1">Email not verified for beta</Typography>
        <TextField id="standard-basic" 
        id='emailInput'
        label="email" 
        onChange={(event) => setUserInfo({...userInfo, email: event.target.value})}/>
        
        { showEmailError ? <Typography color="error" variant="body1">{emailError}</Typography> : null } 

        <br/>
        <TextField 
        id='teamNameInput'
        label="team name" onChange={(event) => 
        setUserInfo({...userInfo, teamName: event.target.value})}/>

        <br/>
        <TextField 
        id='coachNameInput'
        label="coach name" 
        onChange={(event) => setUserInfo({...userInfo, coachName: event.target.value})}/>

        <br/>
        <TextField 
        id="passwordInput" 
        label="password" 
        type="password" 
        onChange={(event) => setUserInfo({...userInfo, password: event.target.value})}/>
        
        { showPasswordError ? <Typography color="error" variant="body1">{passwordError}</Typography> : null } 

        <br/> 
        <Button
        disabled={isDisabled}
        onClick={handleSubmitClicked.bind(this)}
        variant="contained"
        color="primary" >
        create account
        </Button>
      </form>
    </>
  );
}