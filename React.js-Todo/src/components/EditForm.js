import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Title from "./Title";

const EditForm = ({ sendEditedTask, id }) => {
  const [value, setValue] = useState("");
  function handlerForm(e) {
    e.preventDefault();
    if (value) {
      sendEditedTask(id, value);
      setValue("");
    }
  }
  return (
    <form onSubmit={handlerForm} className="w-2/3 mx-auto">
      <Title
        cName="text-2xl capitalize font-regular mb-4"
        title="change your task"
      ></Title>

      <Input
        cName="bg-none focus:outline-none border-2 border-[#6C63FF] w-full px-2 py-2 mb-6 rounded-lg"
        value={value}
        onchange={(e) => setValue(e.target.value)}
        placeholder="change your task ..."
      />

      <Button
        CName="w-full bg-[#6C63FF] hover:bg-[#5049dd] text-white py-2 font-bold rounded-lg"
        type="submit"
      >
        Change
      </Button>
    </form>
  );
};

export default EditForm;
