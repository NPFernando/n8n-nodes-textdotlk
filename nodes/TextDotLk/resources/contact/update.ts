import type { INodeProperties } from 'n8n-workflow';

const showOnlyForContactUpdate = {
	resource: ['contact'],
	operation: ['update'],
};

export const contactUpdateDescription: INodeProperties[] = [
	{
		displayName: 'UID',
		name: 'uid',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForContactUpdate,
		},
		description: 'The unique ID of the contact',
	},
	{
		displayName: 'Mobile',
		name: 'mobile',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForContactUpdate,
		},
		description: 'The mobile number of the contact',
		routing: {
			send: {
				type: 'body',
				property: 'mobile',
			},
		},
	},
	{
		displayName: 'First Name',
		name: 'first_name',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForContactUpdate,
		},
		description: 'The first name of the contact',
		routing: {
			send: {
				type: 'body',
				property: 'first_name',
			},
		},
	},
	{
		displayName: 'Last Name',
		name: 'last_name',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForContactUpdate,
		},
		description: 'The last name of the contact',
		routing: {
			send: {
				type: 'body',
				property: 'last_name',
			},
		},
	},
];
