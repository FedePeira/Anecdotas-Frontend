import { useEffect } from 'react'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import VisibilityFilter from './components/VisibilityFilter'
import Notification from './components/Notification'
import anecdoteService from './services/anecdotes'
import { setAnecdote } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => dispatch(setAnecdote(anecdotes)))
  }, [])

  return (
    <div>
      <Notification/>
      <h2>Anecdotes</h2>
        <VisibilityFilter/>
        <AnecdoteList/>
      <h2>create new</h2>
        <AnecdoteForm/>
    </div>
  )
}

export default App