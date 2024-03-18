import { createSlice } from '@reduxjs/toolkit'

/*
const filterReducer = (state = 'VOTES', action) => {
  console.log('Filter Reducer -->')
  console.log('State Filter now: ', state)
  console.log('Action:', action)
  console.log('---------------------')
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload
    default:
      return state
  }
}
*/

const initialState = 'VOTES'

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterChange(state, action){
      console.log('Modifying filter')
      console.log('---------------------')
      return action.payload
    } 
  }
})

export const { filterChange } = filterSlice.actions
export default filterSlice.reducer