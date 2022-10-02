import React from "react";
import { useDispatch } from "react-redux";
import { orderAlphabetic, orderDate } from "../../redux/action";
import { DivSelectOrder, SelectOrder } from "./StyledOrder";

//Destructuro los estados que me traje
export default function Orders({setPage, setState}) {
  
  const dispatch = useDispatch();

  //Ordeno alfabeticamente por nombre
  const orderAz = (e) => {
    e.preventDefault();
    dispatch(orderAlphabetic(e.target.value));
    // setPage(1);
    setState(e.target.value);
  };

  //Ordeno de mayor a menor las fechas
  const orderAllDate = (e) => {
    e.preventDefault();
    dispatch(orderDate(e.target.value));
    // setPage(1);
    setState(e.target.value);
  };

  return (
    <div>
      <DivSelectOrder>
        <SelectOrder onChange={(e) => orderAz(e)}>
          <option hidden value="order alphabetic">
            Orden Alfabetico
          </option>
          <option value="A - Z">A - Z</option>
          <option value="Z - A">Z - A</option>
        </SelectOrder>

        <SelectOrder onChange={(e) => orderAllDate(e)}>
          <option hidden value="order date">
            Orden de Fecha
          </option>
          <option value="A - Z">Menor Fecha</option>
          <option value="Z - A">Mayor Fecha</option>
        </SelectOrder>
      </DivSelectOrder>
    </div>
  );
}
