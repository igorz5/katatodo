import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";

import TaskData from "../../types/TaskData";

import "./TodoTask.css";

interface TodoTaskProps {
  data: TaskData;
  onUpdate: (data: TaskData) => void;
  onDelete: React.MouseEventHandler<HTMLButtonElement>;
}

const formatCreatedString = (time: Date) =>
  `created ${formatDistanceToNow(time, {
    includeSeconds: true,
    addSuffix: true,
  })}`;

function TodoTask({ data, onUpdate, onDelete }: TodoTaskProps) {
  const [isEditing, setIsEditing] = useState(false);

  const classNames = ["todo-task"];

  const toggleCompletion = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...data };
    newData.completed = e.target.checked;

    onUpdate(newData);
  };

  const onEditBtnClick = () => {
    if (!isEditing) {
      setIsEditing(true);
    }
  };

  const [createdString, setCreatedString] = useState(
    formatCreatedString(data.createdTime)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCreatedString(formatCreatedString(data.createdTime));
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [data.createdTime, createdString]);

  if (data.completed) {
    classNames.push("completed");
  }

  let editInput;
  if (isEditing) {
    classNames.push("editing");

    const onEditKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === "Enter") {
        setIsEditing(false);

        const target = e.target as HTMLInputElement;
        const newData = { ...data };
        newData.label = target.value;

        onUpdate(newData);
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
          <span className="created">{createdString}</span>
        </label>
        <button className="icon icon-edit" onClick={onEditBtnClick} />
        <button className="icon icon-destroy" onClick={onDelete} />
      </div>
      {editInput}
    </div>
  );
}

export default TodoTask;
