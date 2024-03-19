import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const newAnecdote = (event) => {
    event.preventDefault()
    console.log('Creating anecdote...', event.target.anecdote)
    console.log('------------------------')
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote({ content }))
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