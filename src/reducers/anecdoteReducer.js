import { createSlice } from '@reduxjs/toolkit'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

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
  initialState,
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
    }
  }
})

export const { createAnecdote, voteAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer