import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import "./TodoTask.css";

const TodoTask = ({ data }) => {
  const [label, setLabel] = useState(data.label);

  let classNames = ["todo-task"];

  if (data.completed) {
    classNames.push("completed");
  } else if (data.editing) {
    classNames.push("editing");
  }

  let editInput;
  if (data.editing) {
    const onEditChange = (e) => {
      setLabel(e.target.value);
    };

    editInput = (
      <input
        type="text"
        className="edit"
        defaultValue={label}
        onChange={onEditChange}
      />
    );
  }

  const createdStr = `created ${formatDistanceToNow(data.time)}`;

  return (
    <div className={classNames.join(" ")}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{label}</span>
          <span className="created">{createdStr}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      {editInput}
    </div>
  );
};

export default TodoTask;
