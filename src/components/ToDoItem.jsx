import React from "react";

function ToDoItem(props) {
  function eventHandle() {}

  return (
    <div onClick={() => props.onChecked(props.id)}>
      <li>{props.text}</li>;
    </div>
  );
}
export default ToDoItem;
