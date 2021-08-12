import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import firebase from "firebase/app";
import { Link, Typography } from "@material-ui/core";


/*
Tech Spec:
- If no active session - always redirect to login
- If user is loggedin and authorized - proper info should show
*/
export default function SignIn() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const signIn = () => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      // New sign-in will be persisted with session persistence.
      // return firebase.auth().signInWithEmailAndPassword(email, password);
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  return (
    <>
      <Typography variant="h4">
      Sign into Efficiencies
      </Typography>

      <form>
        <TextField id="standard-basic" label="email" onChange={(event) => setEmail(event.target.value)}/>
        
        <br/>
        <TextField id="standard-basic" label="password" type="password" onChange={(event) => setPassword(event.target.value)}/>
        <br/>
        
        <Button 
        variant="contained"
        color="primary" 
        href="#contained-buttons">
        sign in
        </Button>
      </form>

      <br/>
        <Typography variant="h6">
          <Link href={"/createaccount"}>
            create an account
          </Link>
        </Typography>
    </>
  );
}
