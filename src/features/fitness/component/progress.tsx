import { Doughnut } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	LineElement,
	PointElement,
	LinearScale,
	Title,
	CategoryScale,
	ArcElement,
	Tooltip,
	Chart
} from 'chart.js';
import React, { useEffect, useRef } from 'react';
import { IActivity } from '../interface/interface';

interface IProps {
	chartData: IActivity[];
}

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, ArcElement, Tooltip);
const ProgressCart: React.FC<IProps> = ({ chartData }) => {
	const chartRef = useRef<any>(null);
	const duration = chartData.map((item) => item.duration);
	const avgDuration = duration.reduce((sum, curr) => sum + Number(curr), 0) / duration.length;

	useEffect(() => {
		if (chartRef && chartRef.current) {
			chartRef.current?.chartInstance.destroy();
		}
	}, []);

	const data = {
		labels: ['#ffbd2e', '#fffffff'],
		datasets: [
			{
				data: [100, avgDuration],
				backgroundColor: ['#36a2eb', '#ffce56'],
				borderWidth: 0,
				cutout: '70%'
			},
			{
				data: [100, 60],
				backgroundColor: ['#ff6384', '#ffce56'],
				borderWidth: 0,
				cutout: '50%'
			},
			{
				data: [100, 20],
				backgroundColor: ['yellow', '#ffce56'],
				borderWidth: 0,
				cutout: '40%'
			}
		]
	};

	const chartOptions: any = {
		cutout: '78%',
		elements: {
			arc: {
				borderWidth: 0
			}
		},
		aspectRatio: 0,
		maintainAspectRatio: false,
		responsive: true,
		plugins: {
			legend: {
				display: true,
				position: 'bottom',
				labels: {
					usePointStyle: true,
					color: '#210873',
					font: {
						size: 15,
						family: 'Rubik',
						weight: '700'
					},
					padding: 50
				}
			},
			elements: {
				arc: {
					borderWidth: 0
				}
			},
			animation: true,
			tooltip: {
				xAlign: 'right',
				backgroundColor: '#000025',
				bodyColor: 'white',
				titleColor: 'black',

				bodyFont: {
					size: 16,
					weight: '700',
					family: 'Rubik'
				},
				display: true,
				callbacks: {
					title: function (context: any) {
						// console.log(context.label, context.parsed, 'jkhjhjh');
						const label = context.label || '';
						// const value = context.parsed || 0;
						return `${label}`;
					}
				},
				displayColors: false,
				titleMarginBottom: 20,
				boxHeight: 50,
				padding: 15
			},
			labels: [
				{
					text: 'Foo',
					font: {
						size: '60',
						family: 'Arial, Helvetica, sans-serif',
						style: 'italic',
						weight: 'bold'
					},
					color: '#bc2c1a'
				}
			]
		}
	};

	return (
		<div className='doughnut-chart  display-flex-center'>
			<Doughnut id={`${Math.random()}`} data={data} options={chartOptions} />
		</div>
	);
};

export default ProgressCart;
