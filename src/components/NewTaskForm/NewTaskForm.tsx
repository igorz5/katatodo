import { useState } from "react";
import "./NewTaskForm.css";

interface NewTaskFormProps {
  onTaskAdded: (label: string) => void;
}

function NewTaskForm({ onTaskAdded }: NewTaskFormProps) {
  const [label, setLabel] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (label.length > 0) {
      onTaskAdded(label);
      setLabel("");
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  return (
    <form className="add-item-form" onSubmit={onSubmit}>
      <input
        className="add-item-input"
        placeholder="What needs to be done?"
        autoFocus
        value={label}
        onChange={onChange}
      />
    </form>
  );
}

export default NewTaskForm;
