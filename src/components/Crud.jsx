import React, { useState } from 'react';
import Task from './Component';
import uuid from 'react-uuid';

function Crud() {
  let initTasks = [
    { id: id(), name: 'поставьте сто я буду хорошим', completed: false },
    { id: id(), name: 'таск', completed: false },
    { id: id(), name: 'три', completed: false },
  ];

  let [tasks, setTasks] = useState(initTasks);
  let [obj, setObj] = useState({ id: id(), name: '', completed: false });
  let [value, setValue] = useState();

  let result = tasks.map((task, index) => {
    return (
      <Task
        key={index}
        id={task.id}
        name={task.name}
        index={index}
        completed={task.completed}
        changeCheck={changeCheck}
        changeItem={changeItem}
        deleteItem={deleteItem}
      />
    );
  });

  function changeCheck(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      }),
    );
  }

  function deleteItem(index) {
    setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)]);
  }

  function newObj(value) {
    let copy = Object.assign({}, obj);
    copy.name = value;
    setTasks([...tasks, copy]);
    setObj({ id: id(), name: '', completed: false });
    setValue('');
  }

  function changeItem(id, event) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.name = event.target.value;
        }
        return task;
      }),
    );
  }

  return (
    <div className="block">
      <input
        placeholder="создать таску"
        className="input__add"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button className="btn__add" onClick={() => newObj(value)}>
        создать
      </button>
      <div className="list">{result}</div>
    </div>
  );
}

function id() {
  return uuid();
}

export default Crud;
