import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import React, { useEffect, useRef } from 'react';
import { IActivity } from '../interface/interface';

interface IProps {
	chartData: IActivity[];
}

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);
const LineChart: React.FC<IProps> = (props) => {
	const { chartData } = props;
	const chartRef = useRef<any>(null);

	useEffect(() => {
		if (chartRef && chartRef.current) {
			chartRef.current?.chartInstance.destroy();
		}
	}, []);

	const data = {
		labels: chartData.map((data) => data.name),
		datasets: [
			{
				label: 'calories',
				data: chartData.map((data) => data.calories_burned),
				fill: false,
				borderColor: 'rgb(75, 192, 192)',
				tension: 0.4
			}
		]
	};

	const chartOptions = {
		scales: {
			y: {
				beginAtZero: true,

				ticks: {
					color: '#000',
					font: {
						family: 'Rubik',
						weight: '700',
						size: 12
					}
				}
			},
			x: {
				ticks: {
					color: '#000',
					font: {
						family: 'Rubik',
						weight: '700',
						size: 12
					}
				}
			}
		}
	};

	return (
		<div className='text--grey-600 energy-chart--wrapper'>
			<p className='mb--10'>All Activity Energy Burn</p>
			<Line id={`${Math.random()}`} data={data} options={chartOptions} />
		</div>
	);
};

export default LineChart;
