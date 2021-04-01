import { useContext } from "react";
import AppContext from "../context/appContext";
import { Line } from "react-chartjs-2";
import './css/Graph.css';

const  Graph = () => {
  const { state } = useContext(AppContext);
  const { dolarDates, dolarValues } = state;
  const data = {
    labels: dolarDates,
    datasets: [
      {
        label: 'Fluctuacion del dolar',
        data: dolarValues,
        fill: true,
        backgroundColor: 'rgba(41, 134, 239, 0.5)',
        borderColor: 'rgba(41, 120, 210, 0.2)',
        width: '100%',
        height: '150px',
      },
    ],
  }
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  }
  return (
    <center className='graph-container'>
      <Line data={ data } options={ options }/>
    </center>
  );
}

export default Graph;
