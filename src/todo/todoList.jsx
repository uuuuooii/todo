import { useState } from "react";
import * as T from "./todostyled";
const TodoList = () => {
  const [text, setText] = useState();
  const [textList, setTextList] = useState([
    {
      id: "",
      todo: "",
    },
  ]);
  const onHandleChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };
  const onTextPush = () => {
    setTextList((prev) => {
      return [...prev, { todo: text }];
    });
    setText("");
  };
  return (
    <T.Main>
      <div>todoList</div>
      <input placeholder="할일적기" onChange={onHandleChange} />
      <button onClick={onTextPush}>입력</button>
      <div>
        {textList.map((textList, id) => {
          return <li key={id}>{textList.todo}</li>;
        })}
      </div>
    </T.Main>
  );
};

export default TodoList;
