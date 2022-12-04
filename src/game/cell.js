import React from "react";
import { CellStyled } from "./styles/cellStyled";
import { Tetrominos } from "../tetrominos";
const Cell = ({ type }) => {
  return <CellStyled type={"L"} color={Tetrominos["L"].color} />;
};

export default Cell;
