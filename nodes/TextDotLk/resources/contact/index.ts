import type { INodeProperties } from 'n8n-workflow';
import { contactCreateDescription } from './create';
import { contactGetDescription } from './get';
import { contactUpdateDescription } from './update';
import { contactDeleteDescription } from './delete';
import { contactGetAllDescription } from './getAll';

export const contactDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contact'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a contact',
				action: 'Create a contact',
				routing: {
					request: {
						method: 'POST',
						url: '=/contacts/{{$parameter.group_id}}/store',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a contact',
				action: 'Delete a contact',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/contacts/{{$parameter.uid}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a contact',
				action: 'Get a contact',
				routing: {
					request: {
						method: 'GET',
						url: '=/contacts/{{$parameter.uid}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many contacts',
				action: 'Get many contacts',
				routing: {
					request: {
						method: 'GET',
						url: '/contacts',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a contact',
				action: 'Update a contact',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/contacts/{{$parameter.uid}}',
					},
				},
			},
		],
		default: 'create',
	},
	...contactCreateDescription,
	...contactGetDescription,
	...contactUpdateDescription,
	...contactDeleteDescription,
	...contactGetAllDescription,
];
