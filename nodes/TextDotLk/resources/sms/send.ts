import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSmsSend = {
	resource: ['sms'],
	operation: ['send'],
};

export const smsSendDescription: INodeProperties[] = [
	{
		displayName: 'Recipient',
		name: 'recipient',
		type: 'string',
		default: '',
		placeholder: '94771234567',
		required: true,
		displayOptions: {
			show: showOnlyForSmsSend,
		},
		description: 'Recipient mobile number in Text.lk-supported international format, for example 94771234567. Avoid spaces, plus signs, and punctuation unless Text.lk explicitly supports them.',
		routing: {
			send: {
				type: 'body',
				property: 'recipient',
			},
		},
	},
	{
		displayName: 'Sender ID',
		name: 'sender_id',
		type: 'string',
		default: '',
		validateType: 'string-alphanumeric',
		placeholder: 'TEXTLK',
		required: true,
		displayOptions: {
			show: showOnlyForSmsSend,
		},
		description: 'Approved Text.lk sender ID. Use a short alphanumeric sender name and avoid control characters.',
		routing: {
			send: {
				type: 'body',
				property: 'sender_id',
			},
		},
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		options: [
			{
				name: 'Plain',
				value: 'plain',
			},
		],
		default: 'plain',
		displayOptions: {
			show: showOnlyForSmsSend,
		},
		routing: {
			send: {
				type: 'body',
				property: 'type',
			},
		},
	},
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		default: '',
		placeholder: 'Your message text',
		required: true,
		displayOptions: {
			show: showOnlyForSmsSend,
		},
		description: 'SMS message content. Do not include secrets or sensitive one-time credentials unless the workflow is designed and approved for that use case.',
		routing: {
			send: {
				type: 'body',
				property: 'message',
			},
		},
	},
	{
		displayName: 'Schedule Time',
		name: 'schedule_time',
		type: 'dateTime',
		default: '',
		displayOptions: {
			show: showOnlyForSmsSend,
		},
		description: 'Time to schedule the SMS. Confirm the Text.lk account timezone and expected API format before using scheduled sends.',
		routing: {
			send: {
				type: 'body',
				property: 'schedule_time',
			},
		},
	},
];
