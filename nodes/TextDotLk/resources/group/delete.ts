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
		validateType: 'string-alphanumeric',
		placeholder: 'abc123',
		required: true,
		displayOptions: {
			show: showOnlyForGroupDelete,
		},
		description: 'The route-safe Text.lk group UID. Use only letters and numbers; do not include slashes, spaces, or query strings.',
	},
];
