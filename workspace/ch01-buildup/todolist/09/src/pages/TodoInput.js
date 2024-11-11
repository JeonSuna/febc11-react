import yong from "../../../yong.js";
function TodoInput({ handleAdd, handleAddKeyup }) {
    return (yong.createElement('div', { class: 'todoinput' },
        yong.createElement('input', { type: 'text', autofocus: '', onkeyup: event => handleAddKeyup(event) }),
        yong.createElement('button', { type: 'button', onclick: handleAdd }, '추가'))
    )
}
export default TodoInput;