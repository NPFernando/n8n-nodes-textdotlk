import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGroupUpdate = {
	resource: ['group'],
	operation: ['update'],
};

export const groupUpdateDescription: INodeProperties[] = [
	{
		displayName: 'UID',
		name: 'uid',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForGroupUpdate,
		},
		description: 'The unique ID of the group',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForGroupUpdate,
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
