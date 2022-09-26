import React, { FC, useState } from "react";

import "./NewTaskForm.css";

interface NewTaskFormProps {
  onTaskAdded: (label: string) => void;
}

const NewTaskForm: FC<NewTaskFormProps> = ({ onTaskAdded }) => {
  const [label, setLabel] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && label.length > 0) {
      onTaskAdded(label);
      setLabel("");
    }
  };

  return (
    <input
      className="add-item-input"
      placeholder="What needs to be done?"
      autoFocus
      value={label}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export { NewTaskForm };
