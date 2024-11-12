import { useState } from 'react'
import Todo from './pages/todo/Todo'

function App() {
  const [count, setCount] = useState(0)
  console.log('rendering')
  return (
      <Todo />
  )
}

export default App
