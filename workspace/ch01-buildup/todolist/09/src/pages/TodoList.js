import yong from "../../../yong.js";
import TodoItem from "./TodoItem.js";

function TodoList(props) {
    const list = props.itemList.map((item) => TodoItem({ item, toggleDone: props.toggleDone, deleteItem: props.deleteItem }));
    return yong.createElement('ul', { class: 'todolist' }, list)
}
export default TodoList;