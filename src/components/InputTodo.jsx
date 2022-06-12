import React, { useState } from "react";
import "../styles.css";

const style = {
  backgroundColor: "#cfffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { onClick, onChange, inputText } = props;

  return (
    <div style={style} className="input-area">
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
