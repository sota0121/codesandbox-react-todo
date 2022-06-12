import React, { useState } from "react";
import "./styles.css";

const initialToDoContents = ["something to do"];
const initialDoneContents = ["something have been done"];

export default function App() {
  // state
  const [inputText, setInputText] = useState("");
  const [todoContents, setToDoContents] = useState(initialToDoContents);
  const [doneContents, setDoneContents] = useState(initialDoneContents);

  // handler
  const handleChangeInputText = (event) => {
    setInputText(event.target.value);
  };
  const handleClickInputText = () => {
    const newToDos = [...todoContents, inputText];
    setToDoContents(newToDos);
  };

  return (
    <>
      <div className="input-area">
        <input
          id="add-text"
          placeholder="Input ToDo"
          onChange={handleChangeInputText}
        />
        <button onClick={handleClickInputText} id="add-btn">
          Add
        </button>
      </div>
      <div className="todo-area">
        <p className="title">ToDo</p>
        <ul id="todo-list">
          {todoContents.map((c) => {
            return (
              <div key={c} className="list-row">
                <li>{c}</li>
                <button>complete</button>
                <button>remove</button>
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
