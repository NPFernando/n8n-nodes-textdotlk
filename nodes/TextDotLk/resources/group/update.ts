import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGroupUpdate = {
	resource: ['group'],
	operation: ['update'],
};

export const groupUpdateDescription: INodeProperties[] = [
	{
		displayName: 'UID',
		name: 'uid',
		type: 'string',
		default: '',
		validateType: 'string-alphanumeric',
		placeholder: 'abc123',
		required: true,
		displayOptions: {
			show: showOnlyForGroupUpdate,
		},
		description: 'The route-safe Text.lk group UID. Use only letters and numbers; do not include slashes, spaces, or query strings.',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForGroupUpdate,
		},
		description: 'Group name to send to Text.lk. Avoid control characters and unnecessary personal data.',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
];
