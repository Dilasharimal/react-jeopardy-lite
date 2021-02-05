import React from "react";
function JeopardyDisplay(props) {
  let category = "";
  if (props.category) {
    category = props.category.title;
  }
  return (
    <div>
      <div>Question: {props.question}</div>
      <div>Category: {category}</div>
      <div>Point Value: {props.pv}</div>
      <div>Users Score: {props.score}</div>
      <div>
        <input
          name="answer"
          type="text"
          value={props.answer}
          onChange={props.handleChange}
        />
        <button onClick={props.handleAnswer}>Click and Check</button>
      </div>
    </div>
  );
}
export default JeopardyDisplay;
