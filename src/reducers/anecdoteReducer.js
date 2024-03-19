import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

// const getId = () => (100000 * Math.random()).toFixed(0)

/*
const anecdoteReducer = (state = initialState, action) => {
  console.log('Anecdote Reducer -->')
  console.log('State Anecdote now: ', state)
  console.log('Action:', action)
  console.log('---------------------')
  switch(action.type) {
    case 'VOTE': { 
      const id = action.payload.id
      const noteToChange = state.find(n => n.id === id)
      const changedNote = { 
        ...noteToChange, 
        votes: noteToChange.votes + 1
      }
      return  state.map(note =>
        note.id !== id ? note : changedNote 
      ) 
    }
    case 'NEW_NOTE': {
      return state.concat(action.payload)
    }
    default:
      return state
  }
}
*/

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdote(state, action) {
      return action.payload
    },
    changeAnecdote(state, action) {
      const updatedAnecdotes = state.map(anecdote =>
         anecdote.id !== action.payload.id ? anecdote : action.payload
      );
      return updatedAnecdotes;
     }
  }
})

export const { appendAnecdote, setAnecdote, changeAnecdote } = anecdoteSlice.actions
export const initializeAnecdote = () => {
  return async dispatch => {
    const notes = await anecdoteService.getAll()
    dispatch(setAnecdote(notes))
  }
}
export const createAnecdote = content => {
  return async dispatch => {
    console.log('Creating a new Anecdote')
    console.log('---------------------')    
    const newNote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newNote))
  }
}
export const voteAnecdote = id => {
  return async dispatch => {
    console.log('Adding votes')
    console.log('---------------------')
    const anecdoteToChange = await anecdoteService.findById(id)
    const changedAnecdote = { 
      ...anecdoteToChange, 
      votes: anecdoteToChange.votes + 1
    }
    await anecdoteService.updateAnecdote(id, changedAnecdote)
    dispatch(changeAnecdote({ id, ...changedAnecdote }))
  }
}
export default anecdoteSlice.reducer