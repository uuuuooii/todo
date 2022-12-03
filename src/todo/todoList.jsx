import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as T from "./styles/todoStyled";
const TodoList = () => {
  const [text, setText] = useState();
  const [textList, setTextList] = useState([]);
  const [newText, setNewText] = useState();

  //다음에는 state배열에 담아서 state하나로 만들기
  const navigate = useNavigate();
  const onHandleChange = (e) => {
    setText(e.target.value);
  };

  //추가
  const onHandleAdd = () => {
    setTextList((prev) => {
      return [
        ...prev,
        {
          todo: text,
          id: textList.length + 1,
          checked: false,
          edit: false,
          like: 0,
        },
      ];
    });

    setText("");
  };
  //삭제
  const onHandleRemove = (id) => {
    setTextList(textList.filter((textList) => textList.id !== id));
  };
  //수정
  const onHandleEdit = (e) => {
    setNewText(e.target.value);
  };
  const onUpdateEdit = (id) => {
    setTextList(
      textList.map((textList) =>
        textList.id === id ? { ...textList, todo: newText } : textList
      )
    );
  };

  const onChangeEdit = (id) => {
    setTextList(
      textList.map((textList) =>
        textList.id === id
          ? { ...textList, edit: true }
          : { ...textList, edit: false }
      )
    );
  };
  //like
  const onChangeLike = (id) => {
    setTextList(
      textList.map((textList) =>
        textList.id === id ? { ...textList, like: +1 } : textList
      )
    );
  };

  return (
    <T.Main>
      <T.TodoBox>
        <T.Navnar>
          <T.Logo>TodoList</T.Logo>
          <T.Menu>Home</T.Menu>
          <T.Menu onClick={() => navigate("./mail")}>Mail</T.Menu>
          <T.Menu onClick={() => navigate("./game")}>Game</T.Menu>

          <T.Buttons>
            <T.Button type="button" value="Login"></T.Button>
          </T.Buttons>
        </T.Navnar>
        <T.TextWrap>
          <T.WrapInput>
            <T.TextInput
              value={text}
              placeholder="입력해주세요"
              onChange={onHandleChange}
            />
            <T.TextButton
              onClick={() =>
                text === "" ? alert("입력해주세요") : onHandleAdd()
              }
            >
              입력
            </T.TextButton>
          </T.WrapInput>
          <div>
            {textList.map((textList, id) => {
              return (
                <T.TodoList>
                  <T.TodoText key={id}>
                    <input type="checkbox" value="blue" />
                    {textList.todo}
                  </T.TodoText>

                  {textList.edit ? (
                    <>
                      <input onChange={onHandleEdit}></input>
                      <button onClick={() => onUpdateEdit(textList.id)}>
                        수정하기
                      </button>
                    </>
                  ) : (
                    <button
                      value={newText}
                      onClick={() => onChangeEdit(textList.id)}
                    >
                      수정
                    </button>
                  )}
                  <button onClick={() => onHandleRemove(textList.id)}>
                    삭제
                  </button>
                  <button onClick={() => onChangeLike(textList.id)}>
                    ❤️{textList.like}
                  </button>
                  {/* <button>댓글</button> */}
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
