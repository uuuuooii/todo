import React from "react";
import { CellStyled } from "./styles/cellStyled";
import { Tetrominos } from "../tetrominos";
const Cell = ({ type }) => {
  return <CellStyled type={type} color={Tetrominos[type].color} />;
};

export default Cell;
