import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'

const initialState = {
  message: '' 
}

export const setNotificationWithTimeout = createAsyncThunk(
 'notification/setNotificationWithTimeout',
 async ({ message, timeout }, { dispatch }) => {
    dispatch(notify(message));

    setTimeout(() => {
      dispatch(notify('')); 
    }, timeout * 1000);
 }
);

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