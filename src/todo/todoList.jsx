import { useState } from "react";
import * as T from "./todostyled";
const TodoList = () => {
  const [text, setText] = useState("");
  const [textList, setTextList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [newTodo, setNewTodo] = useState();

  console.log(textList);
  const onHandleChange = (e) => {
    setText(e.target.value);
    // console.log(e.target.value);
  };
  const onHandleAdd = () => {
    setTextList((prev) => {
      return [...prev, { todo: text, id: textList.length, checked: false }];
    });

    setText("");
  };

  const onHandleRemove = (id) => {
    setTextList(textList.filter((textList) => textList.id !== id));
  };

  const onHandleEdit = () => {
    setEdit(true);
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
            <T.TextButton onClick={onHandleAdd}>입력</T.TextButton>
          </T.WrapInput>
          <div>
            {textList.map((textList, id) => {
              return (
                <T.TodoList>
                  <T.TodoText key={id}>{textList.todo}</T.TodoText>
                  {edit ? (
                    <>
                      <input></input>
                      <button onClick={onHandleAdd}>완료</button>
                      <button>취소</button>
                    </>
                  ) : (
                    <button onClick={onHandleEdit}>수정</button>
                  )}
                  <button onClick={() => onHandleRemove(textList.id)}>
                    삭제
                  </button>
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
