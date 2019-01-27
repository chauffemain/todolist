import React from "react";
import ToDoItem from "./ToDoItem";
import MainGreets from "./MainGreets";
import MainTime from "./MainTime";

function MainContent() {
  return (
    <main>
      <MainTime />
      <MainGreets />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </main>
  );
}

export default MainContent;
