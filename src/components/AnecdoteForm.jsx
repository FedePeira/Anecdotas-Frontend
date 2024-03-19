import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotificationWithTimeout  } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const newAnecdote = async (event) => {
    event.preventDefault()
    console.log('Creating anecdote...', event.target.anecdote)
    console.log('------------------------')
    console.log(event.target.anecdote.value)
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
    dispatch(setNotificationWithTimeout({ message: `New anecdote '${content}'`, timeout: 3 }));
  }

  return(
    <form onSubmit={newAnecdote}>
      <div><input name='anecdote'/></div>
      <button type="submit">create</button>
    </form>
  )
}

export default AnecdoteForm