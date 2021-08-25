import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'UserSlice',
  initialState: {
    uid: '',
    plays: [],
    roster: [],
  },
  reducers: {
    setUID: (state, action) => {
      state.uid = action.payload
    },
    addRoster: (state, action) => {
      state.roster += action.payload
    },
    addPlay: (state, action) => {
      state.plays += action.payload
    },
  },
})

export const { setUID, addRoster, addPlay } = UserSlice.actions

export default UserSlice.reducer