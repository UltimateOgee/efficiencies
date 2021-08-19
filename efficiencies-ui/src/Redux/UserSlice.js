import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'UserSlice',
  initialState: {
    email: '',
  },
  reducers: {
    changeEmail: (state, action) => {
      state.email = action.payload
    },
  },
})

export const { changeEmail } = UserSlice.actions

export default UserSlice.reducer