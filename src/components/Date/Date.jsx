import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getBookByDate } from "../../redux/action";
import { ButtonDate, DivDate, InputDate } from "./StyledDate";

export default function Date() {
  const dispatch = useDispatch();
  const [state, setState] = useState("");

  const searchDate = (e) => {
    e.preventDefault();
    //Seteo mi estado con los valores que estoy buscando
    setState(e.target.value);
    // console.log(e.target.value)
  };

  const submitDate = (e) => {
    e.preventDefault();
    setState("");
    dispatch(getBookByDate(state));
    // console.log(e.target.value)
  };

  return (
    <div>
      <DivDate>
        <InputDate type="text" value={state} onChange={(e) => searchDate(e)} />
        <ButtonDate onClick={(e) => submitDate(e)}>Buscar</ButtonDate>
      </DivDate>
    </div>
  );
}
