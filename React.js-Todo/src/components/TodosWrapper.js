import React from "react";
import Todos from "./Todos";

const TodosWrapper = ({ allTodos, completeTask, deleteTask, editTask }) => {
  return (
    <section className="w-10/12 lg:w-7/12 mx-auto mt-5">
      {allTodos &&
        allTodos.map((item) => (
          <Todos
            key={item.id}
            id={item.id}
            title={item.task}
            cName={item.isCompleted ? "text-gray-500 line-through" : ""}
            completeTask={completeTask}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
    </section>
  );
};

export default TodosWrapper;
