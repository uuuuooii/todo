import { useState } from "react";
import * as T from "./todostyled";
const TodoList = () => {
  const [text, setText] = useState("");
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
      <T.TodoBox>
        <T.Navnar>
          <T.Logo>TodoList</T.Logo>
          <T.Menu>Home</T.Menu>
          <T.Buttons>
            <T.Button type="button" value="Login"></T.Button>
          </T.Buttons>
        </T.Navnar>
        <T.TextWrap>
          <T.WrapInput>
            <T.TextInput
              value={text}
              placeholder="할일"
              onChange={onHandleChange}
            />
            <T.TextButton onClick={onTextPush}>입력</T.TextButton>
          </T.WrapInput>
          <div>
            {textList.map((textList, id) => {
              return (
                <T.TodoList>
                  <T.TodoText key={id}>{textList.todo}</T.TodoText>
                  <button>수정</button>
                  <button>삭제</button>
                  <button>❤️</button>
                </T.TodoList>
              );
            })}
          </div>
        </T.TextWrap>
      </T.TodoBox>
    </T.Main>
  );
};

export default TodoList;
