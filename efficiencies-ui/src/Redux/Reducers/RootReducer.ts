import { combineReducers } from 'redux'
import { firebaseReducer, FirebaseReducer, FirestoreReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

export interface Player {
  name: string,
  position: string,
  height: number,
  year: string
}
export interface Play {
  name: string,
  type: string,
  possession: string
}

export interface Profile {
  coachName: string,
  teamName: string,
  roster: Player[],
  plays: Play[]
}

interface RootState {
  firebase: FirebaseReducer.Reducer<Profile>,
  firestore: FirestoreReducer.Reducer
}

export const rootReducer = combineReducers<RootState>({
  firebase: firebaseReducer,
  firestore: firestoreReducer
})