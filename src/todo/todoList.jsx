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
      <T.Header>
        <T.Navnar>
          <T.Logo>todoList</T.Logo>
          <T.Menu>Home</T.Menu>
          <T.Buttons>
            <T.Button type="button" value="Login"></T.Button>
          </T.Buttons>
        </T.Navnar>
      </T.Header>
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
