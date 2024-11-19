import TodoInput from '@pages/Todoinput';
import TodoList from '@pages/TodoList';
import PropTypes from 'prop-types';

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

Todo.propTypes = {
  itemList: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired,
  toggleDone: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
export default Todo;
