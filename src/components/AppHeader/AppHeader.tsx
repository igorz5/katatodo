import { FC } from "react";

import NewTaskForm from "../NewTaskForm/NewTaskForm";
import "./AppHeader.css";

interface AppHeaderProps {
  onTaskAdded: (label: string) => void;
}

const AppHeader: FC<AppHeaderProps> = ({ onTaskAdded }) => {
  return (
    <header className="app-header">
      <h1>todos</h1>
      <NewTaskForm onTaskAdded={onTaskAdded} />
    </header>
  );
};

export default AppHeader;
