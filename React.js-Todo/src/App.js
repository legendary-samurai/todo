import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoForm from "./components/TodoForm";
import TodosWrapper from "./components/TodosWrapper";
import EditPanel from "./components/EditPanel";

function App() {
  const [todoList, setTodoList] = useState([]);

  function getTodo(todo) {
    const newTodo = {
      id: Date.now(),
      task: todo,
      isCompleted: false,
      isEdited: false,
    };
    setTodoList((current) => [...current, newTodo]);
  }
  function handleCompleted(id) {
    setTodoList(
      todoList.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }
  function handleDelete(id) {
    setTodoList(todoList.filter((item) => item.id !== id));
  }
  function handleEdit(id) {
    setTodoList(
      todoList.map((task) =>
        task.id === id ? { ...task, isEdited: !task.isEdited } : task
      )
    );
  }
  function getEditedTaskValue(id, value) {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, task: value, isEdited: false } : item
      )
    );
  }
  function cancelEditPanel(id){
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, isEdited: false } : item
      )
    );
  }



  return (
    <div className="w-screen h-screen bg-white">
      <TodoHeader />
      
      <TodoForm sendTodo={getTodo} />

      <TodosWrapper
        allTodos={todoList}
        completeTask={handleCompleted}
        deleteTask={handleDelete}
        editTask={handleEdit}
      />

      {todoList.map((task) =>
        task.isEdited === true ? (
          <EditPanel
            key={task.id}
            id={task.id}
            sendEditedTask={getEditedTaskValue}
            cancelEdit={cancelEditPanel}
          ></EditPanel>
        ) : null
      )}
    </div>
  );
}

export default App;
