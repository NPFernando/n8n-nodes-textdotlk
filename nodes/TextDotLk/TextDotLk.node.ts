import {
	INodeType,
	INodeTypeDescription,
	NodeConnectionTypes,
} from 'n8n-workflow';

import { contactDescription } from './resources/contact';
import { groupDescription } from './resources/group';
import { profileDescription } from './resources/profile';
import { smsDescription } from './resources/sms';

export class TextDotLk implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Text.lk',
		name: 'textDotLk',
		icon: 'file:TextDotLk.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume Text.lk API',
		defaults: {
			name: 'Text.lk',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'textDotLkApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://app.text.lk/api/v3',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Contact',
						value: 'contact',
					},
					{
						name: 'Group',
						value: 'group',
					},
					{
						name: 'Profile',
						value: 'profile',
					},
					{
						name: 'SMS',
						value: 'sms',
					},
				],
				default: 'sms',
			},
			...profileDescription,
			...smsDescription,
			...contactDescription,
			...groupDescription,
		],
	};
}
