import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import React, { useEffect, useRef } from 'react';
import { IActivity } from '../interface/interface';

interface IProps {
	chartData: IActivity[];
}

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);
const HeartChart: React.FC<IProps> = (props) => {
	const { chartData } = props;
	const chartRef = useRef<any>(null);

	useEffect(() => {
		if (chartRef && chartRef.current) {
			chartRef.current?.chartInstance.destroy();
		}
	}, []);

	const days = chartData.map((items) => {
		const month = new Date(items.date);
		return month.toLocaleString('default', { weekday: 'short' });
	});
	// const Month = Array.from(new Set(monthArray));

	const labels = days.splice(0, 5).map((item) => item);
	const minValues = chartData.map((data) => data.heart_rate.average);
	const maxValues = chartData.map((data) => data.heart_rate.max);

	const data = {
		labels: labels,
		datasets: [
			{
				label: 'Minimum Heart Rate',
				data: minValues,
				borderColor: 'rgba(75, 192, 192, 1)',
				backgroundColor: 'rgba(75, 192, 192, 0.2)',
				fill: true
			},
			{
				label: 'Maximum Heart Rate',
				data: maxValues,
				borderColor: 'rgba(255, 99, 132, 1)',
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				fill: true
			}
		]
	};

	const chartOptions = {
		scales: {
			y: {
				beginAtZero: true,

				ticks: {
					color: '#777a7d',
					font: {
						family: 'Rubik',
						weight: '400',
						size: 12
					}
				}
			},
			x: {
				ticks: {
					color: '#777a7d',
					font: {
						family: 'Rubik',
						weight: '400',
						size: 12
					}
				}
			}
		}
	};

	return (
		<div className='text--grey-600 '>
			<Line id={`${Math.random()}`} data={data} options={chartOptions} />
		</div>
	);
};

export default HeartChart;
