import {React, useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import firebase from "firebase/app";
import { Typography } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux'

/*
Tech Spec:
- If no active session - always redirect to login
- If user is loggedin and authorized - proper info should show
*/
export default function SignIn() {
  const [userInfo, setUserInfo] = useState({});
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch()

  const signIn = () => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
    .then(() => {
      // New sign-in will be persisted with session persistence.
      // return firebase.auth().signInWithEmailAndPassword(email, password);
      firebase.auth().signInWithEmailAndPassword(userInfo.email, userInfo.password)
      .then((userCredential) => {
        // dispatch(setUID(userCredential.user.uid))
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if(errorCode === 'auth/wrong-password'){
          setPasswordError(errorMessage);
          setShowPasswordError(true);
          setShowEmailError(false);
        }
        if(errorCode === 'auth/user-not-found'){
          setEmailError(errorMessage);
          setShowEmailError(true);
          setShowPasswordError(false);
        }
        if(errorCode === 'auth/user-disabled'){
          setEmailError(errorMessage);
          setShowEmailError(true);
          setShowPasswordError(false);
        }
        if(errorCode === 'auth/invalid-email'){
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
    });
  }

  //https://www.pluralsight.com/guides/binding-functions-and-enabledisable-state-in-html-buttons-with-reactjs
  const enableComponents = () => {
    setIsDisabled(false);
  }

  const handleSubmitClicked = () => {
    setIsDisabled(true);
    signIn();
  }

  return (
    <>
      <Typography variant="h4">
      Sign into Efficiencies
      </Typography>

      <form>
      <TextField
        id='emailInput'
        label="email" 
        onChange={(event) => setUserInfo({...userInfo, email: event.target.value})}/>

        { showEmailError ? <Typography color="error" variant="body1">{emailError}</Typography> : null } 

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
        color="primary">
        sign in
        </Button>
      </form>
    </>
  );
}
