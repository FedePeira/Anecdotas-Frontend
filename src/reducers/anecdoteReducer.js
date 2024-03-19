import { createSlice } from '@reduxjs/toolkit'

const getId = () => (100000 * Math.random()).toFixed(0)

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
    voteAnecdote(state, action){
      console.log('Adding votes')
      console.log('---------------------')
      const id = action.payload.id
      const noteToChange = state.find(n => n.id === id)
      const changedNote = { 
        ...noteToChange, 
        votes: noteToChange.votes + 1
      }
      return  state.map(note =>
        note.id !== id ? note : changedNote 
      ) 
    },
    createAnecdote(state, action){
      console.log('Creating a new Anecdote')
      console.log('---------------------')
      const newNote = action.payload
      newNote.votes = 0 
      newNote.id = getId()
      return state.concat(newNote)
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdote(state, action) {
      return action.payload
    }
  }
})

export const { createAnecdote, voteAnecdote, appendAnecdote, setAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer