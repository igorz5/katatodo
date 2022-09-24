import NewTaskForm from "../NewTaskForm/NewTaskForm";
import "./AppHeader.css";

const AppHeader = ({ onTaskAdded }) => {
  return (
    <header className="app-header">
      <h1>todos</h1>
      <NewTaskForm onTaskAdded={onTaskAdded} />
    </header>
  );
};

export default AppHeader;
