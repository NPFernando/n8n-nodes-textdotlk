import type { INodeProperties } from 'n8n-workflow';

const showOnlyForContactDelete = {
	resource: ['contact'],
	operation: ['delete'],
};

export const contactDeleteDescription: INodeProperties[] = [
	{
		displayName: 'UID',
		name: 'uid',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForContactDelete,
		},
		description: 'The unique ID of the contact',
	},
];
