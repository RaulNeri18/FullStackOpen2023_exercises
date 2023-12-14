import { useEffect } from 'react'

import NewNote from "./component/NewNote"
import Notes from "./component/Notes"
import VisibilityFilter from './component/VisibilityFilter'

import { initializeNotes } from './reducers/noteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeNotes())  
  }, [])

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}

export default App