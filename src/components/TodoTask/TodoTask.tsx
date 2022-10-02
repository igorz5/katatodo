import { formatDistanceToNowStrict } from "date-fns";
import { FC, MouseEventHandler, useEffect, useRef, useState } from "react";

import { ITaskData } from "../../types/ITaskData";

import "./TodoTask.css";

interface TodoTaskProps {
  data: ITaskData;
  onUpdate: (data: Partial<ITaskData>) => void;
  onDelete: MouseEventHandler<HTMLButtonElement>;
}

const formatCreatedTime = (time: Date) => {
  return `created ${formatDistanceToNowStrict(time, {
    roundingMethod: "ceil",
    addSuffix: true,
  })}`;
};

const formatTimeLeft = (timeLeft: number) => {
  const secs = Math.ceil(timeLeft / 1000);
  const mins = Math.floor(secs / 60);

  return `${mins}:${("00" + String(secs - mins * 60)).slice(-2)}`;
};

const TodoTask: FC<TodoTaskProps> = ({ data, onUpdate, onDelete }) => {
  const { completed, createdTime, label, timeLeft } = { ...data };

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [createdString, setCreatedString] = useState(
    formatCreatedTime(createdTime)
  );

  const onEditKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      setIsEditing(false);

      const target = e.target as HTMLInputElement;
      const newData = { ...data };
      newData.label = target.value;

      onUpdate(newData);
    }
  };

  const toggleCompletion = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ completed: e.target.checked });
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

  const startTask = () => {
    onUpdate({ isActive: true });
  };

  const pauseTask = () => {
    onUpdate({ isActive: false });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCreatedString(formatCreatedTime(createdTime));
    }, 5000);

    document.addEventListener("click", handleClickOutside);

    return () => {
      clearInterval(interval);

      document.removeEventListener("click", handleClickOutside);
    };
  }, [createdTime, createdString]);

  const classNames = ["todo-task"];
  if (completed) {
    classNames.push("completed");
  }

  if (isEditing) {
    classNames.push("editing");
  }

  return (
    <div className={classNames.join(" ")} ref={wrapperRef}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={toggleCompletion}
          defaultChecked={completed}
        />
        <div className="content">
          <div className="title">
            <span>{label}</span>
          </div>
          <div className="description">
            <button className="icon icon-play" onClick={startTask}></button>
            <button className="icon icon-pause" onClick={pauseTask}></button>
            <span className="time">{formatTimeLeft(timeLeft)}</span>
          </div>
          <div className="created">
            <span>{createdString}</span>
          </div>
        </div>
        <button className="icon icon-edit" onClick={onEditBtnClick} />
        <button className="icon icon-destroy" onClick={onDelete} />
      </div>
      {isEditing && (
        <input
          type="text"
          className="edit"
          defaultValue={label}
          onKeyDown={onEditKeyDown}
        />
      )}
    </div>
  );
};

export { TodoTask };
