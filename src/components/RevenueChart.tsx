import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const data = {
  labels,
  datasets: [
    {
      label: 'Deals',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
      fill: true,
    },
    {
      label: 'Revenue',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y1',
      fill: true,
    },
  ],
};

export const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart - Multi Axis',
    },
  },
  scales: {
    x: {
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    y: {
      border: { dash: [4, 4] },
      grid: {
        color: '#aaa',
        tickColor: '#000',
        tickBorderDash: [2, 3],
        tickLength: 10,
        tickWidth: 2,
        offset: true,
        drawTicks: true,
        drawOnChartArea: true,
      },

      beginAtZero: true,
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    },
    y1: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false,
      },
      ticks: {
        callback(label: number | string) {
          return '$' + label;
        },
      },
    },
  },
};

export default function RevenueChart() {
  return <Line options={options} data={data} />;
}
