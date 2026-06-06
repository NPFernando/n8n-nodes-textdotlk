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
		validateType: 'string-alphanumeric',
		placeholder: 'abc123',
		required: true,
		displayOptions: {
			show: showOnlyForSmsGet,
		},
		description: 'The route-safe Text.lk SMS UID. Use only letters and numbers; do not include slashes, spaces, or query strings.',
	},
];
