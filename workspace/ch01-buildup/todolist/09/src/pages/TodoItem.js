import yong from "../../../yong.js";

function TodoItem({ item, toggleDone, deleteItem }) {
    return (
        yong.createElement('li', { 'data-no': item.no },
            yong.createElement('span', null, item.no),
            yong.createElement('span', { onclick: () => toggleDone(item.no) },
                item.done ? yong.createElement('s', null, item.title) : item.title),
            yong.createElement('button', { onclick: () => deleteItem(item.no) }, '삭제'))
    );

}
export default TodoItem;