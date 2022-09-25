import TaskData from "../../types/TaskData";
import TodoTask from "../TodoTask/TodoTask";
import "./TodoList.css";

interface TodoListProps {
  items: TaskData[];
  onUpdate: (id: number, data: TaskData) => void;
  onDelete: (id: number) => void;
}

function TodoList({ items, onUpdate, onDelete }: TodoListProps) {
  const elements = items.map((taskData: TaskData) => (
    <li key={taskData.id} className="todo-list-item">
      <TodoTask
        data={taskData}
        onUpdate={(data) => onUpdate(taskData.id, data)}
        onDelete={() => {
          onDelete(taskData.id);
        }}
      />
    </li>
  ));
  return <ul className="todo-list">{elements}</ul>;
}

export default TodoList;
