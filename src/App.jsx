import "./styles.css";

export default function App() {
  return (
    <>
      <div className="input-area">
        <input id="add-text" placeholder="Input ToDo" />
        <button id="add-btn">Add</button>
      </div>
      <div className="todo-area">
        <p className="title">ToDo</p>
        <ul id="todo-list">
          <div className="list-row">
            <li>something to do</li>
            <button>complete</button>
            <button>remove</button>
          </div>
        </ul>
      </div>
      <div className="done-area">
        <p className="title">Done</p>
        <ul id="done-list">
          <div className="list-row">
            <li>something has been done</li>
            <button>rebase</button>
          </div>
        </ul>
      </div>
    </>
  );
}
