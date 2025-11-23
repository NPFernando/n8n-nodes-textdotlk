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
		description: 'The name of the group',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
];
