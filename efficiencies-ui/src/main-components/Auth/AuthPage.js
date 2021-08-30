import {React, useState} from "react";
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'
import CreateAccount from "./CreateAccount";
import SignIn from "./SignIn";
import { Link, Typography } from "@material-ui/core";


export default function AuthPage() {
  const [swap, setSwap] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const auth = useSelector(state => state.firebase.auth)

  //https://www.pluralsight.com/guides/binding-functions-and-enabledisable-state-in-html-buttons-with-reactjs
  const enableComponents = () => {
    setIsDisabled(false);
  }

  const handleSubmitClicked = () => {
    setIsDisabled(true);
    setSwap(!swap);
    enableComponents();
  }
  if (!isLoaded(auth)) {
    return <h1>loading...</h1>;
  } else{
    if(swap) {
      return(
        <>
          <CreateAccount/>
          <Typography variant="h6">
            <Link 
            disabled={isDisabled}
            onClick={handleSubmitClicked.bind(this)}
            >
              back to sign-in
            </Link>
          </Typography>
        </>
      );
    }else{
      return(
        <>
          <SignIn/>
          <Typography variant="h6">
            <Link
            disabled={isDisabled}
            onClick={handleSubmitClicked.bind(this)}
            >
              create account
            </Link>
          </Typography>
        </>
      );
    }
  }
}