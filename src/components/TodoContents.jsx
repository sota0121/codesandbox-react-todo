import React from "react";
import "../styles.css";

export const TodoContents = (props) => {
  const { todoContents, onClickComplete, onClickRemove } = props;
  return (
    <div className="todo-area">
      <p className="title">ToDo</p>
      <ul id="todo-list">
        {todoContents.map((c, index) => {
          return (
            <div key={c} className="list-row">
              <li>{c}</li>
              <button
                onClick={() => {
                  onClickComplete(index);
                }}
              >
                complete
              </button>
              <button
                onClick={() => {
                  onClickRemove(index);
                }}
              >
                remove
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
