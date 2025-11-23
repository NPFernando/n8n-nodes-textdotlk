import type { INodeProperties } from 'n8n-workflow';

const showOnlyForContactGet = {
	resource: ['contact'],
	operation: ['get'],
};

export const contactGetDescription: INodeProperties[] = [
	{
		displayName: 'UID',
		name: 'uid',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForContactGet,
		},
		description: 'The unique ID of the contact',
	},
];
