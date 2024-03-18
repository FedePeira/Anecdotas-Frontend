import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
  
  const vote = (id) => {
    console.log('Voting...', id)
    console.log('------------------------')
    dispatch(voteAnecdote(id))
  }

  return(
    <ul>
      {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      </div>
      )}
    </ul>
  )
}

export default AnecdoteList