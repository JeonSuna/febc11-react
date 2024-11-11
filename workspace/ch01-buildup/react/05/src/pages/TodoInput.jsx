import React from "react"

  function TodoInput({ addItem }) {
      const [title, setTitle] = React.useState('')
      const [count, setCount] = React.useState(4)

      function handleAdd() {
        if (title.trim() !== '') {
          const item = { _id: count, title, done: false }
          addItem(item)
          setTitle('')
          setCount(count + 1)
        }
      }

      function handleKeyUp(event) {

        if (event.key === "Enter") handleAdd()

      }

      return (
        <div className="todoinput">
          <input
            type="text"
            value={title}
            autoFocus
            onKeyUp={handleKeyUp}
            onChange={event => setTitle(event.target.value)}
          />
          <button type="button" onClick={handleAdd}>추가</button>
        </div>
      )
}
    export default TodoInput
