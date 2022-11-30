import React from "react";
import Display from "./display";
import Stage from "./stage";
import StartButton from "./startButton";

const Tetris = () => {
  return (
    <>
      <Stage />
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        <StartButton />
      </aside>
    </>
  );
};

export default Tetris;
