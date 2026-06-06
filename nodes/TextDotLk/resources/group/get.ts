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
		validateType: 'string-alphanumeric',
		placeholder: 'abc123',
		required: true,
		displayOptions: {
			show: showOnlyForGroupGet,
		},
		description: 'The route-safe Text.lk group UID. Use only letters and numbers; do not include slashes, spaces, or query strings.',
	},
];
