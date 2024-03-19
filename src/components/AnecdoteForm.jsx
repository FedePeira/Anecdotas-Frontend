import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const newAnecdote = async (event) => {
    event.preventDefault()
    console.log('Creating anecdote...', event.target.anecdote)
    console.log('------------------------')
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newNote = await anecdoteService.createNew(content)
    dispatch(createAnecdote(newNote))
    dispatch(notify('New anecdote created!!'))
  }

  return(
    <form onSubmit={newAnecdote}>
      <div><input name='anecdote'/></div>
      <button type="submit">create</button>
    </form>
  )
}

export default AnecdoteForm