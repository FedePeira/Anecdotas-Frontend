import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const [filterContent, setFilterContent] = useState('');

  const filteredAnecdotes = anecdotes.filter(anecdote =>
     anecdote.content.toLowerCase().includes(filterContent.toLowerCase())
  );
  
  const vote = (id) => {
    console.log('Voting...', id)
    console.log('------------------------')
    dispatch(voteAnecdote(id))
  }

  return(
    <div>
      <input
        type="text"
        placeholder="Search anecdotes..."
        value={filterContent}
        onChange={(event) => setFilterContent(event.target.value)}
      />
      <ul>
      {filteredAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
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
    </div>
  )
}

export default AnecdoteList