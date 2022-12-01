import React from "react";
import Cell from "./cell";

const Stage = ({ stage }) => (
  <div width={stage[0].length} height={stage.length}>
    {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </div>
);

export default Stage;
