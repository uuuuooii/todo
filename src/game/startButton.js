import React from "react";
import * as S from "./styles/startButton";

const StartButton = ({ callback }) => {
  return <S.StartButton onClick={callback}>Startbutton</S.StartButton>;
};

export default StartButton;
