import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import "./TodoTask.css";

const TodoTask = ({ data, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  let classNames = ["todo-task"];

  if (data.completed) {
    classNames.push("completed");
  }

  let editInput;
  if (isEditing) {
    classNames.push("editing");

    const onEditKeyDown = (e) => {
      if (e.key === "Enter") {
        setIsEditing(false);

        onUpdate({ label: e.target.value });
      }
    };

    editInput = (
      <input
        type="text"
        className="edit"
        defaultValue={data.label}
        onKeyDown={onEditKeyDown}
      />
    );
  }

  const createdStr = `created ${formatDistanceToNow(data.time)}`;

  const toggleCompletion = (e) => {
    onUpdate({ completed: e.target.checked });
  };

  const onEditBtnClick = () => {
    if (!isEditing) {
      setIsEditing(true);
    }
  };

  return (
    <div className={classNames.join(" ")}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={toggleCompletion}
          defaultChecked={data.completed}
        />
        <label>
          <span className="description">{data.label}</span>
          <span className="created">{createdStr}</span>
        </label>
        <button className="icon icon-edit" onClick={onEditBtnClick}></button>
        <button className="icon icon-destroy" onClick={onDelete}></button>
      </div>
      {editInput}
    </div>
  );
};

export default TodoTask;
