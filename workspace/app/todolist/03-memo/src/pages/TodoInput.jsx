import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

function TodoInput({ addItem }) {
  const [title, setTitle] = useState('');

  const titleElem = useRef(null);
  function handleAdd() {
    if (title.trim() !== '') {
      addItem(title);
      setTitle('');
      titleElem.current.focus();
    }
  }

  function handleKeyUp(event) {
    if (event.key === 'Enter') handleAdd();
  }

  return (
    <div className="todoinput">
      <input
        type="text"
        value={title}
        autoFocus
        onKeyUp={handleKeyUp}
        onChange={(event) => setTitle(event.target.value)}
        ref={titleElem}
      />
      <button type="button" onClick={handleAdd}>
        추가
      </button>
    </div>
  );
}

TodoInput.propTypes = {
  addItem: PropTypes.func.isRequired,
};
export default TodoInput;
