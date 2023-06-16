import React, { useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const Progress: React.FC = () => {
	const chartRef = useRef<any>(null);
	useEffect(() => {
		if (chartRef && chartRef.current) {
			chartRef.current?.chartInstance.destroy();
		}
	}, []);
	const chartData = {
		datasets: [
			{
				data: [75, 50, 25],
				backgroundColor: ['#36a2eb', '#ffce56', '#ff6384'],
				borderWidth: 0,
				cutout: '70%'
			},
			{
				data: [25, 50, 75],
				backgroundColor: ['#36a2eb', '#ffce56', '#ff6384'],
				borderWidth: 0,
				cutout: '80%'
			},
			{
				data: [50, 25, 75],
				backgroundColor: ['#36a2eb', '#ffce56', '#ff6384'],
				borderWidth: 0,
				cutout: '90%'
			}
		]
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		rotation: -Math.PI,
		circumference: Math.PI,
		legend: {
			display: false
		},
		tooltips: {
			enabled: false
		}
	};
	return (
		<div>
			<h2>Progress Donut Chart</h2>
			<Doughnut id={`${Math.random()}`} data={chartData} options={options} />
		</div>
	);
};

export default Progress;
