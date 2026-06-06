import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGroupCreate = {
	resource: ['group'],
	operation: ['create'],
};

export const groupCreateDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForGroupCreate,
		},
		description: 'Group name to send to Text.lk. Avoid control characters and unnecessary personal data.',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
];
