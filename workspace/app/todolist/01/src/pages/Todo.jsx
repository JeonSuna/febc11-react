import TodoInput from '@pages/Todoinput';
import TodoList from '@pages/TodoList';

function Todo({ itemList, addItem, toggleDone, deleteItem }) {
  return (
    <div id="main">
      <div id="container">
        <ul>
          <li>
            <h2>쇼핑 목록</h2>
            <TodoInput addItem={addItem} />
            <TodoList
              itemList={itemList}
              toggleDone={toggleDone}
              deleteItem={deleteItem}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Todo;
