import { createAction } from "@reduxjs/toolkit";

export const ADD_PLAYER = "ADD_PLAYER";
export const ADD_PLAY = "ADD_PLAY";

// how to use action - store.dispatch(loginSuccess("aPayload"))
export const addPlayer = createAction(ADD_PLAYER);
export const addPlay = createAction(ADD_PLAY);