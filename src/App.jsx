import { useEffect } from 'react'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import VisibilityFilter from './components/VisibilityFilter'
import Notification from './components/Notification'
import { initializeAnecdote } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(initializeAnecdote()) 
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