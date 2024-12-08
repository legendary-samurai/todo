import React from "react";
import Button from "./Button";
import Title from "./Title";
// btn images
import completeImg from "../assets/png/icons/check/check-square.svg";
import editImg from "../assets/png/icons/edit/pencil.svg";
import deleteImg from "../assets/png/icons/trash/trash.svg";



const Todos = ({ title, id, cName, completeTask , editTask , deleteTask}) => {
  return (
    <div className="px-1 py-2 text-lg capitalize flex items-center justify-between border-solid border-[#6C63FF] border-b-2">
      <Title cName={cName} title={title}></Title>
      
      <div className="flex items-center space-x-3">
        
        <Button onclick={() => completeTask(id)}>
          <img src={completeImg} alt="complete-img" />
        </Button>

        <Button onclick={() => editTask(id)}>
          <img src={editImg} alt="edit-img" />
        </Button>

        <Button onclick={() => deleteTask(id)}>
          <img src={deleteImg} alt="delete-img" />
        </Button>
      </div>
    </div>
  );
};

export default Todos;
