import React, { FC, useEffect, useRef, useState } from "react";

import { TaskData } from "../../types/TaskData";
import { formatTimeForTask } from "../../utils/formatTime";

import "./TodoTask.css";

interface TodoTaskProps {
  data: TaskData;
  onUpdate: (data: TaskData) => void;
  onDelete: React.MouseEventHandler<HTMLButtonElement>;
}

const TodoTask: FC<TodoTaskProps> = ({ data, onUpdate, onDelete }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [createdString, setCreatedString] = useState(
    formatTimeForTask(data.createdTime)
  );

  const toggleCompletion = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ ...data, completed: e.target.checked });
  };

  const onEditBtnClick = () => {
    if (!isEditing) {
      setIsEditing(true);
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
      setIsEditing(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCreatedString(formatTimeForTask(data.createdTime));
    }, 100);

    document.addEventListener("click", handleClickOutside);

    return () => {
      clearInterval(interval);

      document.removeEventListener("click", handleClickOutside);
    };
  }, [data.createdTime, createdString]);

  const classNames = ["todo-task"];
  if (data.completed) {
    classNames.push("completed");
  }

  if (isEditing) {
    classNames.push("editing");
  }

  const onEditKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      setIsEditing(false);

      const target = e.target as HTMLInputElement;
      const newData = { ...data };
      newData.label = target.value;

      onUpdate(newData);
    }
  };

  return (
    <div className={classNames.join(" ")} ref={wrapperRef}>
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
      {isEditing && (
        <input
          type="text"
          className="edit"
          defaultValue={data.label}
          onKeyDown={onEditKeyDown}
        />
      )}
    </div>
  );
};

export { TodoTask };
