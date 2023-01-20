import React, { useState } from 'react';

export default function Component({
  id,
  name,
  completed,
  changeCheck,
  index,
  deleteItem,
  changeItem,
}) {
  let [edit, setEdit] = useState(false);
  let block;

  if (!edit) {
    block = (
      <p className="elem">
        <input type="checkbox" onChange={() => changeCheck(id)} />
        <span className={completed ? 'complete task' : 'task'} onClick={() => setEdit(true)}>
          {name}
        </span>
        <button className="btn" onClick={() => deleteItem(index)}>
          Delete
        </button>
      </p>
    );
  } else {
    block = (
      <p className="elem">
        <input
          type="text"
          className="input"
          value={name}
          onChange={(event) => changeItem(id, event)}
        />
        <button className="btn" onClick={() => setEdit(false)}>
          Save
        </button>
      </p>
    );
  }

  return block;
}
