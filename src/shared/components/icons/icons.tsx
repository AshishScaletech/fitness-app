import { FC } from 'react';
import { colors } from 'react-select/dist/declarations/src/theme';

export interface IIconProps {
	width?: string;
	height?: string;
	className?: string;
	onClick?: () => void;
}

export const HidePasswordIcon: FC<IIconProps> = ({ height, width, className }: IIconProps) => (
	<svg viewBox='0 0 40 40' fill='none' className={className || ''} width={width || '20'} height={height || '20'}>
		<g opacity='0.3'>
			<path d='M19.8437 24.375C21.0041 24.375 22.1169 23.9141 22.9373 23.0936C23.7578 22.2731 24.2187 21.1603 24.2187 20C24.2187 19.8719 24.2129 19.7449 24.2019 19.6196L19.4633 24.3582C19.5887 24.3692 19.7152 24.375 19.8437 24.375ZM34.325 6.4672L32.6562 4.80001C32.5976 4.74145 32.5182 4.70856 32.4353 4.70856C32.3525 4.70856 32.273 4.74145 32.2144 4.80001L27.9441 9.0715C25.5884 7.86759 22.9404 7.26564 20 7.26564C12.4922 7.26564 6.89061 11.1758 3.19529 18.9961C3.04676 19.3106 2.96973 19.6541 2.96973 20.002C2.96973 20.3498 3.04676 20.6933 3.19529 21.0078C4.67186 24.118 6.44985 26.6108 8.52928 28.4864L4.39686 32.6172C4.3383 32.6758 4.3054 32.7553 4.3054 32.8381C4.3054 32.921 4.3383 33.0004 4.39686 33.059L6.06444 34.7266C6.12303 34.7851 6.20249 34.818 6.28533 34.818C6.36818 34.818 6.44763 34.7851 6.50623 34.7266L34.325 6.90939C34.354 6.88037 34.3771 6.8459 34.3928 6.80796C34.4086 6.77003 34.4166 6.72936 34.4166 6.6883C34.4166 6.64723 34.4086 6.60656 34.3928 6.56863C34.3771 6.53069 34.354 6.49622 34.325 6.4672ZM12.9687 20C12.9686 18.8125 13.2761 17.6453 13.8612 16.612C14.4463 15.5786 15.289 14.7145 16.3074 14.1036C17.3257 13.4928 18.4849 13.1562 19.672 13.1265C20.8591 13.0969 22.0337 13.3752 23.0812 13.9344L21.182 15.8336C20.4161 15.5884 19.5974 15.5588 18.8158 15.7482C18.0341 15.9377 17.3198 16.3387 16.7511 16.9074C16.1824 17.4761 15.7814 18.1904 15.592 18.9721C15.4025 19.7537 15.4321 20.5724 15.6773 21.3383L13.7781 23.2375C13.2451 22.2417 12.9671 21.1295 12.9687 20Z' />
			<path d='M36.8047 18.9922C35.4297 16.0964 33.7931 13.735 31.8949 11.9082L26.2645 17.5391C26.7391 18.7797 26.8443 20.1313 26.5674 21.4305C26.2904 22.7297 25.6432 23.9209 24.7039 24.8602C23.7646 25.7995 22.5735 26.4467 21.2743 26.7236C19.9751 27.0005 18.6235 26.8953 17.3828 26.4207L12.6071 31.1965C14.8227 32.2218 17.287 32.7344 20 32.7344C27.5078 32.7344 33.1094 28.8242 36.8047 21.0039C36.9533 20.6894 37.0303 20.3459 37.0303 19.9981C37.0303 19.6502 36.9533 19.3067 36.8047 18.9922Z' />
		</g>
	</svg>
);

export const ShowPasswordIcon: FC<IIconProps> = ({ height, width, className }: IIconProps) => (
	<svg viewBox='0 0 40 40' fill='none' className={className || ''}>
		<path d='M19.9955 13.6332C16.9871 13.6332 14.5422 16.0781 14.5422 19.0865C14.5422 22.095 16.9871 24.5398 19.9955 24.5398C23.004 24.5398 25.4488 22.095 25.4488 19.0865C25.4488 16.0781 23.0039 13.6332 19.9955 13.6332Z' />
		<path d='M19.9955 5.45331C10.9066 5.45331 3.14477 11.1065 0 19.0866C3.14477 27.0665 10.9066 32.7198 19.9955 32.7198C29.0934 32.7198 36.8462 27.0665 39.991 19.0866C36.8462 11.1065 29.0934 5.45331 19.9955 5.45331ZM19.9955 28.1754C14.9784 28.1754 10.9066 24.1035 10.9066 19.0865C10.9066 14.0694 14.9784 9.9977 19.9955 9.9977C25.0125 9.9977 29.0844 14.0695 29.0844 19.0866C29.0844 24.1036 25.0125 28.1754 19.9955 28.1754Z' />
	</svg>
);

export const Dashboard: FC<IIconProps> = ({ className }: IIconProps) => (
	<svg viewBox='0 0 24 24' className={className || ''}>
		<path
			d='M8.4 3H5.6A1.6 1.6 0 0 0 4 4.6v4.8A1.6 1.6 0 0 0 5.6 11h2.8A1.6 1.6 0 0 0 10 9.4V4.6A1.6 1.6 0 0 0 8.4 3Z'
			fill='#ffffff'
			stroke='#000000'
			stroke-width='1.5'
			stroke-miterlimit='10'
		/>
		<path
			d='M8.4 15H5.6A1.6 1.6 0 0 0 4 16.6v2.8A1.6 1.6 0 0 0 5.6 21h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 8.4 15ZM18.4 3h-2.8A1.6 1.6 0 0 0 14 4.6v2.8A1.6 1.6 0 0 0 15.6 9h2.8A1.6 1.6 0 0 0 20 7.4V4.6A1.6 1.6 0 0 0 18.4 3Z'
			fill='#000000'
			fill-opacity='.16'
			stroke='#000000'
			stroke-width='1.5'
			stroke-miterlimit='10'
		/>
		<path
			d='M18.4 13h-2.8a1.6 1.6 0 0 0-1.6 1.6v4.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6v-4.8a1.6 1.6 0 0 0-1.6-1.6Z'
			fill='#ffffff'
			stroke='#000000'
			stroke-width='1.5'
			stroke-miterlimit='10'
		/>
	</svg>
);

export const Fitness: FC<IIconProps> = ({ className }: IIconProps) => (
	<svg viewBox='0 0 31.262 31.262' className={className || ''}>
		<g>
			<g>
				<path
					d='M15.284,5.535c0-1.727,0.347-3.126,0.347-3.126s0.347,1.399,0.347,3.126c0,0.366-0.018,0.712-0.043,1.038
			c0.476-0.548,1.344-1.735,1.344-3.122C17.279,1.545,15.631,0,15.631,0s-1.647,1.545-1.647,3.451c0,1.386,0.868,2.573,1.342,3.122
			C15.302,6.247,15.284,5.901,15.284,5.535z'
				/>
				<path
					d='M15.979,25.727c0,1.728-0.347,3.127-0.347,3.127s-0.347-1.399-0.347-3.127c0-0.365,0.017-0.712,0.042-1.037
			c-0.475,0.547-1.342,1.734-1.342,3.121c0,1.906,1.647,3.451,1.647,3.451s1.648-1.545,1.648-3.451c0-1.386-0.869-2.572-1.344-3.121
			C15.961,25.015,15.979,25.361,15.979,25.727z'
				/>
				<path
					d='M10.935,7.883c-0.116-0.171-0.235-0.355-0.352-0.557c-0.547-0.947-0.799-1.824-0.799-1.824s0.633,0.658,1.181,1.604
			c0.115,0.201,0.215,0.396,0.305,0.583c0.087-0.452,0.187-1.378-0.251-2.138c-0.605-1.046-1.998-1.372-1.998-1.372
			s-0.415,1.37,0.188,2.415C9.648,7.356,10.501,7.732,10.935,7.883z'
				/>
				<path
					d='M20.328,23.38c0.117,0.171,0.234,0.354,0.352,0.558c0.547,0.946,0.801,1.823,0.801,1.823s-0.637-0.657-1.182-1.604
			c-0.117-0.201-0.217-0.396-0.307-0.584c-0.086,0.453-0.186,1.379,0.254,2.138c0.604,1.046,1.998,1.372,1.998,1.372
			s0.414-1.37-0.191-2.415C21.613,23.906,20.762,23.529,20.328,23.38z'
				/>
				<path
					d='M6.572,15.438c-0.348-0.301-1.101-0.85-1.978-0.851c-1.208,0-2.187,1.043-2.187,1.043s0.979,1.044,2.186,1.044
			c0.879,0,1.631-0.549,1.979-0.85c-0.207,0.015-0.426,0.025-0.658,0.025c-1.094,0-1.98-0.22-1.98-0.22s0.887-0.22,1.98-0.22
			C6.147,15.411,6.365,15.422,6.572,15.438z'
				/>
				<path
					d='M24.689,15.824c0.348,0.301,1.1,0.85,1.977,0.85c1.209,0,2.188-1.043,2.188-1.043s-0.979-1.043-2.188-1.043
			c-0.877,0-1.629,0.549-1.977,0.85c0.207-0.016,0.426-0.025,0.656-0.025c1.096,0,1.982,0.22,1.982,0.22s-0.887,0.222-1.982,0.22
			C25.115,15.851,24.896,15.84,24.689,15.824z'
				/>
				<path
					d='M10.963,24.154c-0.546,0.946-1.181,1.604-1.181,1.604s0.253-0.877,0.799-1.825c0.118-0.2,0.237-0.385,0.354-0.556
			c-0.435,0.15-1.287,0.527-1.727,1.288c-0.604,1.046-0.19,2.415-0.19,2.415s1.394-0.326,1.998-1.37
			c0.439-0.761,0.339-1.688,0.253-2.14C11.18,23.758,11.08,23.953,10.963,24.154z'
				/>
				<path
					d='M20.299,7.107c0.547-0.947,1.182-1.606,1.182-1.606S21.229,6.38,20.68,7.327c-0.113,0.201-0.234,0.385-0.352,0.556
			c0.436-0.15,1.287-0.527,1.725-1.287c0.605-1.045,0.191-2.416,0.191-2.416s-1.395,0.327-1.998,1.372
			c-0.439,0.761-0.34,1.686-0.252,2.138C20.084,7.502,20.184,7.307,20.299,7.107z'
				/>
				<path
					d='M5.905,8.114C4.256,7.161,2.093,7.815,2.093,7.815s0.515,2.2,2.165,3.153c1.202,0.693,2.663,0.535,3.375,0.398
			c-0.295-0.142-0.604-0.3-0.92-0.482C5.217,10.02,4.179,9.02,4.179,9.02s1.386,0.399,2.881,1.263
			c0.316,0.183,0.607,0.372,0.877,0.556C7.701,10.152,7.108,8.807,5.905,8.114z'
				/>
				<path
					d='M27.004,20.295c-1.203-0.693-2.662-0.536-3.375-0.398c0.293,0.143,0.604,0.299,0.918,0.482
			c1.496,0.863,2.535,1.863,2.535,1.863s-1.385-0.398-2.881-1.262c-0.316-0.183-0.607-0.371-0.877-0.556
			c0.236,0.687,0.832,2.03,2.033,2.724c1.65,0.952,3.811,0.299,3.811,0.299S28.652,21.247,27.004,20.295z'
				/>
				<path
					d='M4.179,22.242c0,0,1.039-1.002,2.534-1.865c0.317-0.182,0.625-0.339,0.921-0.482c-0.712-0.137-2.175-0.295-3.375,0.399
			c-1.651,0.952-2.166,3.151-2.166,3.151s2.162,0.653,3.812-0.299c1.202-0.693,1.796-2.039,2.033-2.724
			c-0.271,0.185-0.561,0.372-0.876,0.556C5.565,21.842,4.179,22.242,4.179,22.242z'
				/>
				<path
					d='M27.082,9.019c0,0-1.039,1-2.533,1.864c-0.316,0.183-0.625,0.341-0.92,0.482c0.713,0.138,2.174,0.295,3.373-0.398
			c1.652-0.954,2.166-3.152,2.166-3.152s-2.16-0.653-3.811,0.299c-1.203,0.694-1.795,2.038-2.033,2.723
			c0.27-0.183,0.561-0.372,0.877-0.554C25.697,9.419,27.082,9.019,27.082,9.019z'
				/>
				<path
					d='M15.631,14.893c0,0-4.119-3.736-6.75-3.409c5.057,2.655,6.75,12.456,6.75,12.456s0.497-8.806,6.75-12.456
			C19.039,10.873,15.631,14.893,15.631,14.893z'
				/>
				<circle cx='15.631' cy='11.421' r='1.693' />
			</g>
		</g>
	</svg>
);

export const RightIcon: FC<IIconProps> = ({ className }: IIconProps) => (
	<svg viewBox='0 0 18 15' className={className || ''}>
		<path d='M17.3145 7.64551C17.3145 7.37305 17.2002 7.10938 16.998 6.91602L11.2236 1.1416C10.9951 0.921875 10.7578 0.825195 10.5117 0.825195C9.94922 0.825195 9.54492 1.2207 9.54492 1.75684C9.54492 2.03809 9.65918 2.27539 9.83496 2.45117L11.8125 4.45508L14.3613 6.78418L12.3223 6.66113H1.66992C1.08105 6.66113 0.676758 7.06543 0.676758 7.64551C0.676758 8.2168 1.08105 8.62109 1.66992 8.62109H12.3223L14.3613 8.49805L11.8125 10.8271L9.83496 12.8311C9.65918 13.0068 9.54492 13.2441 9.54492 13.5254C9.54492 14.0615 9.94922 14.457 10.5117 14.457C10.7578 14.457 10.9951 14.3604 11.2061 14.1582L16.998 8.36621C17.2002 8.17285 17.3145 7.90918 17.3145 7.64551Z' />
	</svg>
);

export const HeartIcon: FC<IIconProps> = ({ className }: IIconProps) => (
	<svg viewBox='0 0 512 512' className={className || ''}>
		<path d='M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z' />
	</svg>
);

export const RunIcon: FC<IIconProps> = ({ className }: IIconProps) => (
	<svg viewBox='0 0 448 512' className={className || ''}>
		<path d='M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H362.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z' />
	</svg>
);

export const CaloriesIcon: FC<IIconProps> = ({ className }: IIconProps) => (
	<svg viewBox='0 0 384 512' className={className || ''}>
		<path d='M153.6 29.9l16-21.3C173.6 3.2 180 0 186.7 0C198.4 0 208 9.6 208 21.3V43.5c0 13.1 5.4 25.7 14.9 34.7L307.6 159C356.4 205.6 384 270.2 384 337.7C384 434 306 512 209.7 512H192C86 512 0 426 0 320v-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6C85.9 176 96 186.1 96 198.6V288c0 35.3 28.7 64 64 64s64-28.7 64-64v-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7c0-27.7 9-54.8 25.6-76.9z' />
	</svg>
);

export const ClockIcon: FC<IIconProps> = ({ className }: IIconProps) => (
	<svg viewBox='0 0 512 512' className={className || ''}>
		<path d='M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z' />
	</svg>
);

export const LocationIcon: FC<IIconProps> = ({ className }: IIconProps) => (
	<svg viewBox='0 0 384 512' className={className || ''}>
		<path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z' />
	</svg>
);

export const SwimingIcon: FC<IIconProps> = ({ className }: IIconProps) => (
	<svg viewBox='0 0 576 512' className={className || ''}>
		<path d='M309.5 178.4L447.9 297.1c-1.6 .9-3.2 2-4.8 3c-18 12.4-40.1 20.3-59.2 20.3c-19.6 0-40.8-7.7-59.2-20.3c-22.1-15.5-51.6-15.5-73.7 0c-17.1 11.8-38 20.3-59.2 20.3c-10.1 0-21.1-2.2-31.9-6.2C163.1 193.2 262.2 96 384 96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-26.9 0-52.3 6.6-74.5 18.4zM160 160A64 64 0 1 1 32 160a64 64 0 1 1 128 0zM306.5 325.9C329 341.4 356.5 352 384 352c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 405.7 417 416 384 416c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 341.2 165.1 352 192 352c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z' />
	</svg>
);

export const HandIcon: FC<IIconProps> = ({ className }: IIconProps) => (
	<svg viewBox='0 0 122.44 122.88' className={className || ''}>
		<g>
			<path
				className='st0'
				d='M8.49,55.93c-5.21,22.63-9.1,44.85-8.41,66.95c7.27-1.05,17.17-7.9,26.59-19.15 c22.64,12.77,44.36,9.94,65.39-4.69c26.91-3.98,36.07-15.63,26.98-35.19L84.63,14.42c-1.77-2.54-0.94-1.49-3.85-4.02l-6.59-5.73 c-2.74-4.37-6.22-5.54-10.31-4.05l-9.29,3.04C48.62,6,46.9,9.21,49.35,13.28l2.83,4.56c1.51,3.8,3.87,5.55,7.67,3.8l0.56-0.18 c-0.09-0.25-0.12-0.53-0.05-0.81c0.2-0.86,0.4-1.67,0.58-2.4c0.51-2.08,0.83-3.38,0.72-3.65c-0.08-0.19-0.92,0.64-3.46,1.66 c-0.73,0.29-1.56-0.06-1.85-0.79c-0.29-0.73,0.06-1.56,0.79-1.85c4.43-1.78,6.35-2.1,7.17-0.08c0.45,1.13,0.05,2.76-0.6,5.39 c-0.12,0.48-0.25,1-0.38,1.58l0.38-0.13l-0.45,0.17c8.97-3.38,7.49,1.71,13.38,10.56c7.35,11.05,11.27,24.22,11.34,39.78 C74.35,59.4,58.75,59.8,41.92,67.66C33.54,57.94,22.24,54.37,8.49,55.93L8.49,55.93z'
			/>
		</g>
	</svg>
);

export const DistanceIcon: FC<IIconProps> = ({ className }: IIconProps) => (
	<svg viewBox='0 0 512 512' className={className || ''}>
		<g data-name='<Group>'>
			<circle cx='99.23' cy='330.75' r='34.573' data-name='<Path>' />
			<path
				d='M93.452,460.033a8,8,0,0,0,11.557,0l57.5-60.054c34.519-35.914,34.532-94.621.027-130.868a86.815,86.815,0,0,0-126.578-.028C1.435,305,1.423,363.705,35.944,399.968ZM99.23,280.177A50.573,50.573,0,1,1,48.658,330.75,50.63,50.63,0,0,1,99.23,280.177Z'
				data-name='<Compound Path>'
			/>
			<circle cx='412.77' cy='99.543' r='34.573' data-name='<Path>' />
			<path
				d='M412.77,10.5a86.726,86.726,0,0,0-63.276,27.376c-34.52,35.915-34.532,94.622-.011,130.886l57.508,60.064a8,8,0,0,0,11.557,0l57.5-60.053c34.519-35.914,34.532-94.621.027-130.868A86.745,86.745,0,0,0,412.77,10.5Zm0,139.616a50.573,50.573,0,1,1,50.572-50.573A50.63,50.63,0,0,1,412.77,150.116Z'
				data-name='<Compound Path>'
			/>
			<path
				d='M98,484a18.021,18.021,0,0,0,18,18h76c54.038,0,98-44.462,98-98.5v-73c0-34.187,27.813-61.5,62-61.5h41a18,18,0,0,0,0-36H352c-54.038,0-98,43.462-98,97.5v73c0,34.187-27.813,62.5-62,62.5H116A18.021,18.021,0,0,0,98,484Z'
				data-name='<Path>'
			/>
		</g>
	</svg>
);
