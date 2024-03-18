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

export const filterChange = filter => {
  console.log('Creating the action filter... ')
  console.log('---------------------')
  return {
    type: 'SET_FILTER',
    payload: filter,
  }
}

export default filterReducer