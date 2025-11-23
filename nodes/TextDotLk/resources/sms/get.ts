import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSmsGet = {
	resource: ['sms'],
	operation: ['get'],
};

export const smsGetDescription: INodeProperties[] = [
	{
		displayName: 'UID',
		name: 'uid',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForSmsGet,
		},
		description: 'The unique ID of the SMS',
	},
];
