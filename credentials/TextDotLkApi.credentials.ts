import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
	Icon,
} from 'n8n-workflow';

export class TextDotLkApi implements ICredentialType {
	name = 'textDotLkApi';
	displayName = 'Text.lk API';
	documentationUrl = 'https://text.lk/docs';
	icon: Icon = { light: 'file:../nodes/TextDotLk/TextDotLk.svg', dark: 'file:../nodes/TextDotLk/TextDotLk.dark.svg' };
	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials?.accessToken}}',
			},
		},
	};
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://app.text.lk/api/v3',
			url: '/me',
			method: 'GET',
		},
	};
}
