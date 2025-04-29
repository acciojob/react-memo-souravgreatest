import React from "react";

const ReactMemo = React.memo(({ todos }) => {
  console.log("Rendering <ReactMemo />");

  return (
    <ul className="skill-list">
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
});

export default ReactMemo;