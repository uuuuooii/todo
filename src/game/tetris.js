import React from "react";
import { createStage } from "../gameHelpers";
import Display from "./display";
import Stage from "./stage";
import StartButton from "./startButton";
import * as T from "./styles/tetrisStyled";
const Tetris = () => {
  return (
    <T.TetrisWrapper>
      <T.Tetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </T.Tetris>
    </T.TetrisWrapper>
  );
};

export default Tetris;
