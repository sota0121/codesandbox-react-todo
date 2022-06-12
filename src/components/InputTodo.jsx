import React, { useState } from "react";
import "../styles.css";

export const InputTodo = (props) => {
  const { onClick, onChange, inputText } = props;

  return (
    <div className="input-area">
      <input
        id="add-text"
        placeholder="Input ToDo"
        onChange={onChange}
        value={inputText}
      />
      <button onClick={onClick} id="add-btn">
        Add
      </button>
    </div>
  );
};
