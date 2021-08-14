import {React, useState} from "react";
import { Link, Typography } from "@material-ui/core";
import CreateAccount from "./CreateAccount";
import SignIn from "./SignIn";

export default function AuthPage() {
  const [swap, setSwap] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);


  //https://www.pluralsight.com/guides/binding-functions-and-enabledisable-state-in-html-buttons-with-reactjs
  const enableComponents = () => {
    setIsDisabled(false);
  }

  const handleSubmitClicked = () => {
    setIsDisabled(true);
    setSwap(!swap);
    enableComponents();

    // setTimeout(
    //   function() {
    //     enableComponents()
    //   }.bind(this),
    //   3000
    // );
  }

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
            create an account
          </Link>
        </Typography>
      </>
    );
  }
}