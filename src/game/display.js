import React from "react";
import * as D from "./styles/displayStyled";

const Display = ({ gameOver, text }) => {
  return <D.StyledDisplay gameOver={gameOver}>{text}</D.StyledDisplay>;
};

export default Display;
