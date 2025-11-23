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
		required: true,
		displayOptions: {
			show: showOnlyForSmsSend,
		},
		description: 'The mobile number of the recipient (e.g. 94771234567)',
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
		required: true,
		displayOptions: {
			show: showOnlyForSmsSend,
		},
		description: 'The Sender ID to use',
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
		required: true,
		displayOptions: {
			show: showOnlyForSmsSend,
		},
		description: 'The message content',
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
		description: 'Time to schedule the SMS (Y-m-d H:i)',
		routing: {
			send: {
				type: 'body',
				property: 'schedule_time',
			},
		},
	},
];
