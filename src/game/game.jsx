import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as T from "../todo/todostyled";
const Game = () => {
  const navigate = useNavigate();

  return (
    <T.Main>
      <T.TodoBox>
        <T.Navnar>
          <T.Logo>TodoList</T.Logo>
          <T.Menu onClick={() => navigate("/")}>Home</T.Menu>
          <T.Menu onClick={() => navigate("/mail")}>Mail</T.Menu>
          <T.Menu>Game</T.Menu>
          <T.Buttons>
            <T.Button type="button" value="Login"></T.Button>
          </T.Buttons>
        </T.Navnar>
        <T.TextWrap></T.TextWrap>
      </T.TodoBox>
    </T.Main>
  );
};

export default Game;
