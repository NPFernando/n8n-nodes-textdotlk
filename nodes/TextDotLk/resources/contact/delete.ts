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
		validateType: 'string-alphanumeric',
		placeholder: 'abc123',
		required: true,
		displayOptions: {
			show: showOnlyForContactDelete,
		},
		description: 'The route-safe Text.lk contact UID. Use only letters and numbers; do not include slashes, spaces, or query strings.',
	},
];
