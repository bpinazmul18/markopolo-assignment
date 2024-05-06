import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Direct', 'Paid', 'Social', 'Other'],
  datasets: [
    {
      data: [30, 30, 5, 15],
      backgroundColor: ['rgb(242,165,152)', 'rgb(255,232,157)', 'rgb(236,107,109)', 'rgb(122,231,125)'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],

  plugins: {
    labels: {
      render: 'percentage',
      fontColor: ['green', 'white', 'red'],
      precision: 2,
    },
  },
  text: '23%',
};

const plugin = {
  id: 'doughnutLabel',
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  afterDatasetsDraw: (chart: any) => {
    const { ctx, data } = chart;
    const centerX = chart.getDatasetMeta(0).data[0].x;
    const centerY = chart.getDatasetMeta(0).data[0].y;
    ctx.save();

    ctx.font = 'bold 20px sans-serif';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillText(
      `$${data.datasets[0].data.reduce((partialSum: number, a: number) => partialSum + a, 0)}`,
      centerX,
      centerY,
    );
  },
};

export default function RevenueChannels() {
  return (
    <div className="revenue-channels">
      <div className="revenue-box">
        <div className="revenue-box_header">
          <h3>Top Revenue Channels</h3>

          <div className="revenue-box_header_arrow-right">
            <img src="./images/right-fill.svg" alt="right fill" />
          </div>
        </div>

        <Doughnut
          data={data}
          plugins={[plugin]}
          options={{
            aspectRatio: 1.4,
            plugins: {
              legend: {
                display: true,
                position: 'bottom',
                labels: {
                  usePointStyle: true,
                  boxWidth: 4,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}
