import { useState } from "react";
import * as T from "./todostyled";
const TodoList = () => {
  const [text, setText] = useState();
  const [textList, setTextList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [newText, setNewText] = useState();
  const [like, setlike] = useState(0);

  console.log(textList);
  const onHandleChange = (e) => {
    setText(e.target.value);
    // console.log(e.target.value);
  };
  const onHandleEdit = (e) => {
    setNewText(e.target.value);
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

  const onUpdateEdit = (id) => {
    setTextList(
      textList.map((textList) =>
        textList.id === id ? { ...textList, todo: newText } : textList
      )
    );
    setEdit(false);
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
                      <input onChange={onHandleEdit}></input>
                      <button onClick={() => onUpdateEdit(textList.id)}>
                        수정하기
                      </button>
                    </>
                  ) : (
                    <button value={newText} onClick={() => setEdit(true)}>
                      수정
                    </button>
                  )}
                  <button onClick={() => onHandleRemove(textList.id)}>
                    삭제
                  </button>
                  <button onClick={() => setlike(like + 1)}>❤️{like}</button>
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
