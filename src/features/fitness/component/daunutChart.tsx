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
const DoughnutChart: React.FC<IProps> = ({ chartData }) => {
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
				label: 'Duration',
				data: [avgDuration, 100 - avgDuration],
				borderColor: ['#fff'],
				borderWidth: 1,
				backgroundColor: ['#efefef', 'blue'],
				hoverOffset: 10
			}
		]
	};

	const CenterText = [
		{
			id: 'center',
			beforeDraw: function (chart: Chart) {
				const width = chart.width,
					height = chart.height,
					ctx = chart.ctx;
				ctx.restore();
				const fontSize = (height / 160).toFixed(2);
				ctx.font = fontSize + 'Rubik';
				ctx.textBaseline = 'top';
				const text = `average ${avgDuration}`,
					textX = Math.round((width - ctx.measureText(text).width) / 2),
					textY = height / 2;
				ctx.fillText(text, textX, textY);
				ctx.save();
			}
		}
	];

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
			<Doughnut id={`${Math.random()}`} data={data} options={chartOptions} plugins={CenterText} />
		</div>
	);
};

export default DoughnutChart;
