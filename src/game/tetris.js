import React from "react";
import Display from "./display";
import Stage from "./stage";

const Tetris = () => {
  return (
    <>
      <Stage />
      <aside>
        <Display text="Score" />
        <Display text="Rows" />
        <Display text="Level" />
      </aside>
    </>
  );
};

export default Tetris;
