import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Reducers/userReducer';
import { firebaseReducer, firestoreReducer } from 'react-redux-firebase'

const store = configureStore({
  reducer: {
    user: userReducer,
    firebase: firebaseReducer,
    // firestore: firestoreReducer
  },
  //middleware,
});

export default store;