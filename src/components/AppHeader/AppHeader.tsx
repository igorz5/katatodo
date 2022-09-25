import NewTaskForm from "../NewTaskForm/NewTaskForm";
import "./AppHeader.css";

interface AppHeaderProps {
  onTaskAdded: (label: string) => void;
}

function AppHeader({ onTaskAdded }: AppHeaderProps) {
  return (
    <header className="app-header">
      <h1>todos</h1>
      <NewTaskForm onTaskAdded={onTaskAdded} />
    </header>
  );
}

export default AppHeader;
