import React, { useEffect, useState } from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function ChartBookings() {
  const [set, setSet] = useState();

  useEffect(() => {
    axios.get(`https://api-challenge.blockinar.io/bookings`).then((r) => {
      // setSet(r.data);
    });
  }, []);

  // const fechas = set;
  // console.log(fechas)
  // var fechasSort = fechas.sort((a, b) => (a.check_in_date).getTime() > (b.check_in_date).getTime());
  // console.log(fechasSort)



  // const graphitMonth = () => {
  //   let labels = set.reduce((labels, el) => {
  //     const month = new Date(el.check_in_date).getMonth();
  //     if(labels.indexOf(month) < 0){
  //       labels.push(month)
  //     }
  //     return labels;
  //   }, [])

  //   var orderDate = labels.sort((a, b) => {
  //     if (a < b) return -1;
  //     if (a > b) return 1;
  //     return 0;
  //   })
  //   console.log(orderDate)

  //   const info = set.reduce((info, el) => {
  //     const month = new Date(el.check_in_date).getMonth();
  //     const pos = labels.indexOf(month)

  //     if(info[pos]) {
  //       info[pos]++;
  //     } else {
  //       info[pos] = 1;
  //     }

  //     return info;
  //   })

  //   labels = labels.map(textMes)
  // }

  
  const data = {
    labels: [
      "Octubre",
      "Septiembre",
      "Agosto",
      "Julio",
    ],
    datasets: [
      {
        label: "Reservas Por Mes",
        data: [2, 30, 1, 0],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
    ],
  };

  // console.log(data)

  return (
    <div>
      <Line data={data} />
    </div>
  );
}
