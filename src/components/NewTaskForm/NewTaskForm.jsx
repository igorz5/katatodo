import "./NewTaskForm.css";

const NewTaskForm = () => {
  return (
    <form className="add-item-form">
      <input
        className="add-item-input"
        placeholder="What needs to be done?"
        autoFocus
      />
    </form>
  );
};

export default NewTaskForm;
