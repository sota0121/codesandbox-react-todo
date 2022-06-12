import React, { useState } from "react";
import "./styles.css";

const initialToDoContents = ["something to do"];
const initialDoneContents = ["something have been done"];

export default function App() {
  // ---------------------------
  // state
  // ---------------------------
  const [inputText, setInputText] = useState("");
  const [todoContents, setToDoContents] = useState(initialToDoContents);
  const [doneContents, setDoneContents] = useState(initialDoneContents);

  // ---------------------------
  // handler
  // ---------------------------
  const handleChangeInputText = (event) => {
    setInputText(event.target.value);
  };

  const handleClickInputText = () => {
    if (inputText === "") return;
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

  return (
    <>
      <div className="input-area">
        <input
          id="add-text"
          placeholder="Input ToDo"
          onChange={handleChangeInputText}
          value={inputText}
        />
        <button onClick={handleClickInputText} id="add-btn">
          Add
        </button>
      </div>
      <div className="todo-area">
        <p className="title">ToDo</p>
        <ul id="todo-list">
          {todoContents.map((c, index) => {
            return (
              <div key={c} className="list-row">
                <li>{c}</li>
                <button
                  onClick={() => {
                    handleClickComplete(index);
                  }}
                >
                  complete
                </button>
                <button
                  onClick={() => {
                    handleClickRemove(index);
                  }}
                >
                  remove
                </button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="done-area">
        <p className="title">Done</p>
        <ul id="done-list">
          {doneContents.map((c) => {
            return (
              <div key={c} className="list-row">
                <li>{c}</li>
                <button>rebase</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
