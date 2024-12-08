import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const TodoForm = ({ sendTodo }) => {
  const [inputValue, setInputValue] = useState("");

  function handleForm(e) {
    e.preventDefault();
    if (inputValue) {
      sendTodo(inputValue);
      setInputValue("");
    }
  }

  

  return (
    <form onSubmit={handleForm} className="w-10/12 lg:w-7/12 mx-auto mt-5">
      <section className="flex items-center">

        <Input
          value={inputValue}
          cName="block bg-[none] focus:outline-none w-3/4 border-solid border-[#6C63FF] border-2 rounded-md py-2 px-3"
          onchange ={(e) => setInputValue(e.target.value)}
          placeholder='enter your todo...'
        ></Input>

        <Button
          type="sumbit"
          CName="block w-1/4 bg-[#6C63FF] hover:bg-[#483ff9] hover:border-[#483ff9] border-solid border-[#6C63FF] ml-1 rounded-md text-white font-medium border-2 py-2 px-3"
        >
          Add
        </Button>
      </section>
    </form>
  );
};

export default TodoForm;
