import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGroupDelete = {
	resource: ['group'],
	operation: ['delete'],
};

export const groupDeleteDescription: INodeProperties[] = [
	{
		displayName: 'UID',
		name: 'uid',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForGroupDelete,
		},
		description: 'The unique ID of the group',
	},
];
