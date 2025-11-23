import type { INodeProperties } from 'n8n-workflow';
import { groupCreateDescription } from './create';
import { groupGetDescription } from './get';
import { groupUpdateDescription } from './update';
import { groupDeleteDescription } from './delete';
import { groupGetAllDescription } from './getAll';

export const groupDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['group'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a group',
				action: 'Create a group',
				routing: {
					request: {
						method: 'POST',
						url: '/contacts/groups',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a group',
				action: 'Delete a group',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/contacts/groups/{{$parameter.uid}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a group',
				action: 'Get a group',
				routing: {
					request: {
						method: 'GET',
						url: '=/contacts/groups/{{$parameter.uid}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many groups',
				action: 'Get many groups',
				routing: {
					request: {
						method: 'GET',
						url: '/contacts/groups',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a group',
				action: 'Update a group',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/contacts/groups/{{$parameter.uid}}',
					},
				},
			},
		],
		default: 'create',
	},
	...groupCreateDescription,
	...groupGetDescription,
	...groupUpdateDescription,
	...groupDeleteDescription,
	...groupGetAllDescription,
];
