import React from "react";
import "../styles.css";

export const DoneContents = (props) => {
  const { doneContents, onClickRebase } = props;
  return (
    <div className="done-area">
      <p className="title">Done</p>
      <ul id="done-list">
        {doneContents.map((c, index) => {
          return (
            <div key={c} className="list-row">
              <li>{c}</li>
              <button
                onClick={() => {
                  onClickRebase(index);
                }}
              >
                rebase
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
