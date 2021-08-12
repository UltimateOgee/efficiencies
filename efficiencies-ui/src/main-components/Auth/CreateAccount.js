import {React, useEffect, useState} from "react";
import TextField from "@material-ui/core/TextField";
import { Link, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import firebase from "firebase/app";

export default function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const createAccount = () => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
      });
    });
  };

  //https://www.pluralsight.com/guides/binding-functions-and-enabledisable-state-in-html-buttons-with-reactjs
  const enableComponents = () => {
    setIsDisabled(false);
  }

  const handleSubmitClicked = () => {
    setIsDisabled(true);
    createAccount();

    // setTimeout(
    //   function() {
    //     enableComponents()
    //   }.bind(this),
    //   3000
    // );
  }



  return (
    <>
      <Typography variant="h4">
      Create your Efficiencies Account
      </Typography>

      <form>
        <TextField id="standard-basic" label="email" onChange={(event) => setEmail(event.target.value)}/>
        
        <br/>
        <TextField id="standard-basic" label="password" type="password" onChange={(event) => setPassword(event.target.value)}/>
        <br/>
        
        <Button
        disabled={isDisabled}
        onClick={handleSubmitClicked.bind(this)}
        variant="contained"
        color="primary" 
        href="#contained-buttons">
        create account
        </Button>
      </form>

      <br/>
        <Typography variant="h6">
          <Link href={"/signin"}>
            back to sign-in
          </Link>
        </Typography>
    </>
  );
}