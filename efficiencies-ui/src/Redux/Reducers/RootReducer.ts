import { combineReducers } from 'redux'
import { firebaseReducer, FirebaseReducer, FirestoreReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

interface Player {
  name: string,
  position: string,
  height: number,
  weight: number
}
interface Play {
  name: string,
  type: string,
  possession: string
}

interface Profile {
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