import type { INodeProperties } from 'n8n-workflow';

const showOnlyForContactCreate = {
	resource: ['contact'],
	operation: ['create'],
};

export const contactCreateDescription: INodeProperties[] = [
	{
		displayName: 'Group ID',
		name: 'group_id',
		type: 'string',
		default: '',
		validateType: 'string-alphanumeric',
		placeholder: 'abc123',
		required: true,
		displayOptions: {
			show: showOnlyForContactCreate,
		},
		description: 'The route-safe Text.lk group ID. Use only letters and numbers; do not include slashes, spaces, or query strings.',
	},
	{
		displayName: 'Mobile',
		name: 'mobile',
		type: 'string',
		default: '',
		placeholder: '94771234567',
		required: true,
		displayOptions: {
			show: showOnlyForContactCreate,
		},
		description: 'Contact mobile number in Text.lk-supported international format, for example 94771234567. Avoid spaces, plus signs, and punctuation unless Text.lk explicitly supports them.',
		routing: {
			send: {
				type: 'body',
				property: 'mobile',
			},
		},
	},
	{
		displayName: 'First Name',
		name: 'first_name',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForContactCreate,
		},
		description: 'First name to send to Text.lk. Avoid control characters and unnecessary personal data.',
		routing: {
			send: {
				type: 'body',
				property: 'first_name',
			},
		},
	},
	{
		displayName: 'Last Name',
		name: 'last_name',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForContactCreate,
		},
		description: 'Last name to send to Text.lk. Avoid control characters and unnecessary personal data.',
		routing: {
			send: {
				type: 'body',
				property: 'last_name',
			},
		},
	},
];
