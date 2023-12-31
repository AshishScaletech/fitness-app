const FIRST_LEVEL_BREADCRUMBS = [{ name: 'home', link: '/' }];

const NUMBER_REGEX = /[0-9]*\.?[0-9]*$/;
const PASSWORD_VALIDATOR_REGEX = /^(?=.{8,})(?!.*[\s])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+*!=]).*$/;
const EMAIL_VALIDATOR_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const DATE_AND_TIME_REGEX = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])*$/;

enum HASHTAG {
	'hashtag' = 'Hashtag Name',
	'slug' = 'Slug',
	'is_active' = 'Status',
	'is_sponsored_by' = 'Sponsored by',
	'priority' = 'Priority',
	'meta_title' = 'Meta Title',
	'meta_description' = 'Meta Description'
}

export {
	FIRST_LEVEL_BREADCRUMBS,
	NUMBER_REGEX,
	PASSWORD_VALIDATOR_REGEX,
	EMAIL_VALIDATOR_REGEX,
	DATE_AND_TIME_REGEX,
	HASHTAG
};

export const DATA = {
	user: {
		id: '123456',
		name: 'John Doe',
		email: 'johndoe@example.com',
		age: 30,
		height: 180,
		weight: 75
	},
	activities: [
		{
			id: 'activity_1',
			name: 'Running',
			date: '2023-06-08',
			duration: 45,
			distance: 6.2,
			calories_burned: 500,
			heart_rate: {
				average: 150,
				max: 175
			},
			steps: 8000,
			pace: {
				average: 7.3,
				best: 6.5
			},
			elevation_gain: 80
		},
		{
			id: 'activity_2',
			name: 'Cycling',
			date: '2023-06-07',
			duration: 60,
			distance: 15.3,
			calories_burned: 700,
			heart_rate: {
				average: 135,
				max: 160
			},
			steps: 5000,
			speed: {
				average: 25.5,
				max: 32.8
			},
			elevation_gain: 120
		},
		{
			id: 'activity_3',
			name: 'Strength Training',
			date: '2023-06-06',
			duration: 75,
			calories_burned: 400,
			heart_rate: {
				average: 120,
				max: 145
			},
			reps: {
				total: 120,
				sets: 3,
				average_per_set: 40
			},
			weight_lifted: {
				total: 2000,
				average_per_rep: 16.7
			}
		},
		{
			id: 'activity_4',
			name: 'Swimming',
			date: '2023-06-05',
			duration: 60,
			distance: 1.5,
			calories_burned: 350,
			heart_rate: {
				average: 125,
				max: 140
			},
			laps: 20,
			pool_length: 25
		},
		{
			id: 'activity_5',
			name: 'Hiking',
			date: '2023-06-04',
			duration: 120,
			distance: 8.5,
			calories_burned: 600,
			heart_rate: {
				average: 130,
				max: 155
			},
			elevation_gain: 450
		},
		{
			id: 'activity_6',
			name: 'Yoga',
			date: '2023-06-03',
			duration: 60,
			calories_burned: 200,
			heart_rate: {
				average: 90,
				max: 110
			}
		},
		{
			id: 'activity_7',
			name: 'Elliptical',
			date: '2023-06-02',
			duration: 45,
			calories_burned: 400,
			heart_rate: {
				average: 125,
				max: 150
			},
			distance: 5.0,
			strides: 3500
		},
		{
			id: 'activity_8',
			name: 'Basketball',
			date: '2023-06-01',
			duration: 90,
			calories_burned: 800,
			heart_rate: {
				average: 140,
				max: 165
			}
		},
		{
			id: 'activity_9',
			name: 'Pilates',
			date: '2023-05-31',
			duration: 60,
			calories_burned: 250,
			heart_rate: {
				average: 100,
				max: 120
			}
		},
		{
			id: 'activity_10',
			name: 'Rowing',
			date: '2023-05-30',
			duration: 30,
			distance: 2.5,
			calories_burned: 300,
			heart_rate: {
				average: 115,
				max: 135
			},
			strokes: 500
		},
		{
			id: 'activity_11',
			name: 'Kickboxing',
			date: '2023-05-29',
			duration: 60,
			calories_burned: 600,
			heart_rate: {
				average: 150,
				max: 170
			}
		},
		{
			id: 'activity_12',
			name: 'Soccer',
			date: '2023-05-28',
			duration: 120,
			calories_burned: 800,
			heart_rate: {
				average: 145,
				max: 170
			}
		},
		{
			id: 'activity_13',
			name: 'CrossFit',
			date: '2023-05-27',
			duration: 60,
			calories_burned: 500,
			heart_rate: {
				average: 155,
				max: 180
			}
		},
		{
			id: 'activity_14',
			name: 'Tennis',
			date: '2023-05-26',
			duration: 90,
			calories_burned: 700,
			heart_rate: {
				average: 140,
				max: 165
			}
		},
		{
			id: 'activity_15',
			name: 'Dancing',
			date: '2023-05-25',
			duration: 45,
			calories_burned: 300,
			heart_rate: {
				average: 120,
				max: 145
			}
		},
		{
			id: 'activity_16',
			name: 'Pilates',
			date: '2023-05-24',
			duration: 60,
			calories_burned: 250,
			heart_rate: {
				average: 100,
				max: 120
			}
		},
		{
			id: 'activity_17',
			name: 'Rowing',
			date: '2023-05-23',
			duration: 30,
			distance: 2.5,
			calories_burned: 300,
			heart_rate: {
				average: 115,
				max: 135
			},
			strokes: 500
		},
		{
			id: 'activity_18',
			name: 'Kickboxing',
			date: '2023-05-22',
			duration: 60,
			calories_burned: 600,
			heart_rate: {
				average: 150,
				max: 170
			}
		},
		{
			id: 'activity_19',
			name: 'Soccer',
			date: '2023-05-21',
			duration: 120,
			calories_burned: 800,
			heart_rate: {
				average: 145,
				max: 170
			}
		},
		{
			id: 'activity_20',
			name: 'CrossFit',
			date: '2023-05-20',
			duration: 60,
			calories_burned: 500,
			heart_rate: {
				average: 155,
				max: 180
			}
		}
	]
};
