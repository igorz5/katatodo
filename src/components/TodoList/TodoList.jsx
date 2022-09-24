import TodoTask from "../TodoTask/TodoTask";
import "./TodoList.css";

const TodoList = ({ items, onUpdate, onDelete }) => {
  const elements = items.map((taskData) => {
    return (
      <li key={taskData.id} className="todo-list-item">
        <TodoTask
          data={taskData}
          onUpdate={(data) => onUpdate(taskData.id, data)}
          onDelete={() => {
            onDelete(taskData.id);
          }}
        />
      </li>
    );
  });
  return <ul className="todo-list">{elements}</ul>;
};

export default TodoList;
