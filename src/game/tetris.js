import { useState } from "react";
//components
import Display from "./display";
import Stage from "./stage";
import StartButton from "./startButton";

//custom hook
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

//styled
import * as T from "./styles/tetrisStyled";
import { createStage } from "../gameHelpers";
const Tetris = () => {
  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);
  console.log("re-render");
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
