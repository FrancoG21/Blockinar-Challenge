import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { getAllRooms } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { DivChartRooms, TitleChartRooms } from "./StyledChartRooms";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChartRooms() {

  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms);
  // console.table(rooms)

  useEffect(() => {
    dispatch(getAllRooms());
  }, []);

  //Recorro mi estado y me traigo todas las ocupaciones para sumarlas y obtener el total
  var ocuped = `${rooms.map((i) => i.occupancy).reduce((prev, curr) => prev + curr, 0)}`;
  // console.log(ocuped);

  //Recorro todo mi estado asi obtengo el numero de las habitaciones totales
  var total = `${rooms.length}`;
  // console.log(total);

  //Resto el total de las habitaciones y todas las ocupadas, para obtener el total de habitaciones desocupadas
  var desocuped = total - ocuped;
  // console.log(desocuped);

  //Guardo en un arreglo las habitaciones ocupadas y desocupadas para que lo tome la data del chart.js
  const info = [desocuped, ocuped];

  var data = {
    labels: ["Libre", "Ocupado"],
    datasets: [
      {
        label: total,
        data: info,
        backgroundColor: ["green", "red"],
        borderColor: ["black", "black"],
        borderWidth: 1,
      },
    ],
  };
  // console.log(data);

  return (
    <DivChartRooms>
      <div>
        <TitleChartRooms>Porcentaje de Ocupación</TitleChartRooms>
      </div>
      <Pie data={data} height="60vh" width="20vw" />
    </DivChartRooms>
  );
}
