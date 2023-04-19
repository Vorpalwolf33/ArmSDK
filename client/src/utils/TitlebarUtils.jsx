import { ReactComponent as User } from '../assets/images/user.svg';

export const options = [
	{
		name: 'File',
		options: [
			{
				name: 'New',
			},
			{
				name: 'Recent',
			},
			{
				name: 'Open',
			},
			{
				name: 'Save',
			},
			{
				name: 'Save As'
			},
			{
				name: 'Import'
			},
			{
				name: 'Export'
			},
		]
	},
	{
		name: 'View',
	},
	// {
	// 	name: 'Code',
	// },
	{
		name: 'Download',
	},
]

export const userOptions = {
	name: <User />,
	options: [
		{
			name: "Profile",
		},
		{
			name: "Settings",
		},
		{
			name: "Logout"
		},
	]
}