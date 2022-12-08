import React from "react";
import { useState } from "react";
import { createStage } from "../gameHelpers";

export const useStage = () => {
  //초기 단계를 그냥 호출 할 수 있다.
  const [stage, setStage] = useState(createStage());
  return [stage, setStage];
};
