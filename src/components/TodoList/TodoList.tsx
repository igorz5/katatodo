import { FC } from "react";

import { TaskData } from "../../types/TaskData";
import { TodoTask } from "../TodoTask/TodoTask";
import "./TodoList.css";

interface TodoListProps {
  items: TaskData[];
  onUpdate: (id: number, data: TaskData) => void;
  onDelete: (id: number) => void;
}

const TodoList: FC<TodoListProps> = ({ items, onUpdate, onDelete }) => {
  return (
    <ul className="todo-list">
      {items.map((taskData: TaskData) => {
        return (
          <li key={taskData.id} className="todo-list-item">
            <TodoTask
              data={taskData}
              onUpdate={(data: TaskData) => onUpdate(taskData.id, data)}
              onDelete={() => {
                onDelete(taskData.id);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export { TodoList };
