import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'UserSlice',
  initialState: {
    uid: ''
  },
  reducers: {
    setUID: (state, action) => {
      state.uid = action.payload
    },
  },
})

export const { setUID } = UserSlice.actions

export default UserSlice.reducer