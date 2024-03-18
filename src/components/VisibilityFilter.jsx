import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const VisibilityFilter = () => {
  const dispatch = useDispatch()

  return (
    <div>    
      <input 
        type="radio" 
        name="filter" 
        onChange={() => dispatch(filterChange('CONTENT'))}
      /> Content
      <input
        type="radio"
        name="filter"
        onChange={() => dispatch(filterChange('VOTES'))}
      /> Votes
    </div>
  )
}

export default VisibilityFilter