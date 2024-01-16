import React from "react";
import { InputContainer } from "./styles";

function index({value}) {
  return (
    <InputContainer>
      <input disabled value={value}/>
    </InputContainer>
  );
}

export default index;
