import React from "react";
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import firebase from "firebase/app";


/*
Tech Spec:
- If no active session - always redirect to login
- If user is loggedin and authorized - proper info should show
*/
export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [check, setCheck] = React.useState(true);

  //do more research
  React.useEffect(() => {

  }, [check]);

  const signIn = (event) => {
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

  const createUser = (event) => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
      });
    });
  }

  return (
    <>
      <h1>Create your Efficiencies Account</h1>
      <form id="createUser">
        <TextField id="standard-basic" label="Email" onChange={(event) => setEmail(event.target.value)}/>
        <br/>
        <TextField id="standard-basic" label="Password" type="password" onChange={(event) => setPassword(event.target.value)}/>
        <br/>
        <Button 
        onClick={createUser()}
        id="submitButton"
        variant="contained"
        color="primary" 
        href="#contained-buttons">
        Create Account
        </Button>
      </form>
    </>
  );
  if(false){
    return (
      <>
        <h1>Login to Efficiencies</h1>
        <form id="login">
          <TextField id="standard-basic" label="Email" onChange={(event) => setEmail(event.target.value)}/>
          <br/>
          <TextField id="standard-basic" label="Password" type="password" onChange={(event) => setPassword(event.target.value)}/>
          <br/>
          <Button 
          onClick={createUser()}
          variant="contained"
          color="primary" 
          href="#contained-buttons">
          Create Account
          </Button>
        </form>
      </>
    );
  }
}
