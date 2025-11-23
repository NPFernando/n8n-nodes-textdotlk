import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGroupGet = {
	resource: ['group'],
	operation: ['get'],
};

export const groupGetDescription: INodeProperties[] = [
	{
		displayName: 'UID',
		name: 'uid',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForGroupGet,
		},
		description: 'The unique ID of the group',
	},
];
