import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const [filterContent, setFilterContent] = useState('');
  const { anecdotes, filter } = useSelector(state => ({
    anecdotes: state.anecdotes,
    filter: state.filter
  }))  
  const dispatch = useDispatch()

  const filteredAnecdotes = () => {
    console.log('Initializing anecdotes by order of: ', filter)
    console.log('------------------------')    
    if(filter === 'CONTENT') {
        return anecdotes.filter(anecdote =>
        anecdote.content.toLowerCase().includes(filterContent.toLowerCase()));
      } else {
        return anecdotes.slice().sort((a, b) => b.votes - a.votes)
      }
  }
  
  const vote = (id) => {
    console.log('Voting...', id)
    console.log('------------------------')
    dispatch(voteAnecdote(id))
  }

  return(
    <div>
      {filter === 'CONTENT' ? 
      <input
        type="text"
        placeholder="Search anecdotes..."
        value={filterContent}
        onChange={(event) => setFilterContent(event.target.value)}
        /> : null }
      <ul>
      {filteredAnecdotes().map(anecdote =>
        <div key={anecdote.id} className='anecdote'>
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
    </div>
  )
}

export default AnecdoteList