import React, { useState } from "react";
import "./styles.css";

import { InputTodo } from "./components/InputTodo";
import { TodoContents } from "./components/TodoContents";

export default function App() {
  // ---------------------------
  // state
  // ---------------------------
  const [inputText, setInputText] = useState("");
  const [todoContents, setToDoContents] = useState([]);
  const [doneContents, setDoneContents] = useState([]);

  // ---------------------------
  // handler
  // ---------------------------
  const handleChangeInputText = (event) => {
    setInputText(event.target.value);
  };

  const handleClickInputText = () => {
    if (inputText === "") return;
    console.log(todoContents);
    const newToDos = [...todoContents, inputText];
    setToDoContents(newToDos);
    setInputText(""); // init inputText
  };

  const handleClickRemove = (index) => {
    const newToDos = [...todoContents];
    newToDos.splice(index, 1); // delete element of set index
    setToDoContents(newToDos);
  };

  const handleClickComplete = (index) => {
    // get content from todo list
    const newDone = todoContents[index];

    // remove from todo list
    const newToDos = [...todoContents];
    newToDos.splice(index, 1);
    setToDoContents(newToDos);

    // add to done list
    const newDones = [...doneContents, newDone];
    setDoneContents(newDones);
  };

  const handleClickRebase = (index) => {
    // get conntent from done list
    const rebaseTarget = doneContents[index];

    // remove from done list
    const newDones = [...doneContents];
    newDones.splice(index, 1);
    setDoneContents(newDones);

    // add to todo-list
    const newTodos = [...todoContents, rebaseTarget];
    setToDoContents(newTodos);
  };

  return (
    <>
      <InputTodo
        onClick={handleClickInputText}
        onChange={handleChangeInputText}
        inputText={inputText}
      />
      <TodoContents
        todoContents={todoContents}
        onClickComplete={handleClickComplete}
        onClickRemove={handleClickRemove}
      />
      <div className="done-area">
        <p className="title">Done</p>
        <ul id="done-list">
          {doneContents.map((c, index) => {
            return (
              <div key={c} className="list-row">
                <li>{c}</li>
                <button
                  onClick={() => {
                    handleClickRebase(index);
                  }}
                >
                  rebase
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
