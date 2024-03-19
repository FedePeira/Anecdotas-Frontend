import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: '' 
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    notify(state, action) {
      state.message = action.payload
    }
  }
})

export const { notify } = notificationSlice.actions
export default notificationSlice.reducer