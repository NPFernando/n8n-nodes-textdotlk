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
		validateType: 'string-alphanumeric',
		placeholder: 'abc123',
		required: true,
		displayOptions: {
			show: showOnlyForContactGet,
		},
		description: 'The route-safe Text.lk contact UID. Use only letters and numbers; do not include slashes, spaces, or query strings.',
	},
];
