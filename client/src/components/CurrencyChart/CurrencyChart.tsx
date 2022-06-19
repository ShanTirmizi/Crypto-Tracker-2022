import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../pages/HomePage/HomePage.css';
import { ChartDataProps } from '../../utils/interface';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CurrencyChart = (props: ChartDataProps) => {
  const { setErrorMsg, errorMsg } = props;
  const { id } = useParams();
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchHistoricalData = async () => {
    setIsLoading(true);
    await axios
      .get(`https://shan-crypto.herokuapp.com/${id}`)
      .then((response) => setChartData(response.data.prices))
      .catch((error) => setErrorMsg({ msg: error.message, isError: true }));
    setIsLoading(false);
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#fafafa',
          font: {
            size: 20,
          },
        },
      },
      title: {
        display: true,
        text: `Price of ${id} over the past 30 days`,
        color: '#fafafa',
        font: {
          size: 20,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: '#fafafa',
          font: {
            size: 18,
          },
        },
      },
      x: {
        ticks: {
          color: '#fafafa',
          font: {
            size: 14,
          },
          stepSize: 1,
        },
      },
    },
  };

  const data = {
    labels: chartData.map((item: number[]) => {
      return new Date(item[0]).toLocaleDateString();
    }),
    datasets: [
      {
        data: chartData.map((item: number[]) => {
          return item[1];
        }),
        label: 'Price in GBP',
        backgroundColor: 'rgba(244, 244, 247,0.8)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(232,105,90,0.8)',
        scaleStepWidth: 1,
      },
    ],
  };
  useEffect(() => {
    fetchHistoricalData();
  }, [id]);
  return (
    <>
      {' '}
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : errorMsg.isError ? (
        <div>{errorMsg.msg}</div>
      ) : (
        <Line options={options} data={data} />
      )}{' '}
    </>
  );
};

export default CurrencyChart;
