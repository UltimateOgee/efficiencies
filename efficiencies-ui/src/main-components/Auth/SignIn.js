import {React, useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import firebase from "firebase/app";
import { Typography } from "@material-ui/core";

/*
Tech Spec:
- If no active session - always redirect to login
- If user is loggedin and authorized - proper info should show
*/
export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const signIn = () => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      // New sign-in will be persisted with session persistence.
      // return firebase.auth().signInWithEmailAndPassword(email, password);
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // var user = userCredential.user;
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
        <TextField id="standard-basic" label="email" onChange={(event) => setEmail(event.target.value)}/>
        { showEmailError ? <Typography color="error" variant="body1">{emailError}</Typography> : null } 

        <br/>
        <TextField id="standard-basic" label="password" type="password" onChange={(event) => setPassword(event.target.value)}/>
        { showPasswordError ? <Typography color="error" variant="body1">{passwordError}</Typography> : null } 
        <br/>
        
        <Button 
        disabled={isDisabled}
        onClick={handleSubmitClicked.bind(this)}
        variant="contained"
        color="primary" 
        href="#contained-buttons">
        sign in
        </Button>
      </form>
    </>
  );
}
