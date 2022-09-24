import "./NewTaskForm.css";

const NewTaskForm = ({ onTaskAdded }) => {
  const onInputKeyDown = (e) => {
    const label = e.target.value;
    if (e.key === "Enter") {
      if (label.length > 0) {
        onTaskAdded(label);
        e.target.value = "";
      }

      e.preventDefault();
    }
  };

  return (
    <form className="add-item-form">
      <input
        className="add-item-input"
        placeholder="What needs to be done?"
        autoFocus
        onKeyDown={onInputKeyDown}
      />
    </form>
  );
};

export default NewTaskForm;
