import NewTaskForm from "../NewTaskForm/NewTaskForm";
import "./AppHeader.css";

const AppHeader = () => {
  return (
    <header className="app-header">
      <h1>todos</h1>
      <NewTaskForm />
    </header>
  );
};

export default AppHeader;
