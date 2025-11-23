import type { INodeProperties } from 'n8n-workflow';
import { smsSendDescription } from './send';
import { smsGetDescription } from './get';
import { smsGetAllDescription } from './getAll';

export const smsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['sms'],
			},
		},
		options: [
			{
				name: 'Send',
				value: 'send',
				description: 'Send an SMS',
				action: 'Send an SMS',
				routing: {
					request: {
						method: 'POST',
						url: '/sms/send',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get an SMS',
				action: 'Get an SMS',
				routing: {
					request: {
						method: 'GET',
						url: '=/sms/{{$parameter.uid}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many SMS',
				action: 'Get many SMS',
				routing: {
					request: {
						method: 'GET',
						url: '/sms',
					},
				},
			},
		],
		default: 'send',
	},
	...smsSendDescription,
	...smsGetDescription,
	...smsGetAllDescription,
];
