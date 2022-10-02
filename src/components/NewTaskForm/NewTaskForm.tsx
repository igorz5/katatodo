import { ChangeEvent, FC, KeyboardEvent, useState } from "react";

import "./NewTaskForm.css";

interface NewTaskFormProps {
  onTaskAdded: (label: string, time: number) => void;
}

type TaskParams = {
  label?: string;
  minutes?: number;
  seconds?: number;
};

const NewTaskForm: FC<NewTaskFormProps> = ({ onTaskAdded }) => {
  const [params, setParams] = useState<TaskParams>({});

  const onKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.key !== "Enter") return;

    const { label, seconds, minutes } = { ...params };

    if (minutes == null && seconds == null) return;
    if (label == null || label.length === 0) return;

    const mins = minutes || 0;
    const secs = seconds || 0;

    const taskTimeMS = (mins * 60 + secs) * 1000;
    onTaskAdded(label, taskTimeMS);

    setParams({});
  };

  const updateParams = (name: keyof TaskParams, value: string) => {
    const newParams = { ...params };

    if (name === "minutes" || name === "seconds") {
      const n = Number(value);
      if (!isNaN(n)) {
        newParams[name] = n;
      }
    } else {
      newParams[name] = value;
    }

    setParams(newParams);
  };

  return (
    <form className="new-todo-form" onKeyDown={onKeyDown}>
      <input
        className="new-todo"
        placeholder="Task"
        autoFocus
        value={params.label || ""}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          updateParams("label", e.target.value);
        }}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Min"
        autoFocus
        value={params.minutes || ""}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          updateParams("minutes", e.target.value);
        }}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        autoFocus
        value={params.seconds || ""}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          updateParams("seconds", e.target.value);
        }}
      />
    </form>
  );
};

export { NewTaskForm };
