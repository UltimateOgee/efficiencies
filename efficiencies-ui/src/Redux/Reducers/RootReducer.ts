import { combineReducers } from 'redux'
import { firebaseReducer, FirebaseReducer, FirestoreReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

interface Profile {
  coachName: string,
  teamName: string,
}

interface RootState {
  firebase: FirebaseReducer.Reducer<Profile>,
  firestore: FirestoreReducer.Reducer
}

export const rootReducer = combineReducers<RootState>({
  firebase: firebaseReducer,
  firestore: firestoreReducer
})