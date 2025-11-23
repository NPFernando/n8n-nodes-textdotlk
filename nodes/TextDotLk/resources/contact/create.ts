import type { INodeProperties } from 'n8n-workflow';

const showOnlyForContactCreate = {
	resource: ['contact'],
	operation: ['create'],
};

export const contactCreateDescription: INodeProperties[] = [
	{
		displayName: 'Group ID',
		name: 'group_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForContactCreate,
		},
		description: 'The ID of the group to add the contact to',
	},
	{
		displayName: 'Mobile',
		name: 'mobile',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForContactCreate,
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
			show: showOnlyForContactCreate,
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
			show: showOnlyForContactCreate,
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
