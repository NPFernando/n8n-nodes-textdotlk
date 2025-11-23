import type { INodeProperties } from 'n8n-workflow';
import { profileViewDescription } from './view';

export const profileDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['profile'],
			},
		},
		options: [
			{
				name: 'View',
				value: 'view',
				description: 'View profile',
				action: 'View profile',
				routing: {
					request: {
						method: 'GET',
						url: '/me',
					},
				},
			},
		],
		default: 'view',
	},
	...profileViewDescription,
];
