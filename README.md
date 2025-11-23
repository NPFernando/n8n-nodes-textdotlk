# n8n-nodes-textdotlk

This is an n8n community node package for the [Text.lk](https://text.lk) service. It allows you to integrate Text.lk SMS functionality into your n8n workflows.

[n8n](https://n8n.io/) is a fair-code licensed workflow automation platform.

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

### SMS

- **Send**: Send an SMS message.
- **Get**: Retrieve details of a specific SMS.
- **Get Many**: Retrieve a list of SMS messages.

### Contacts

- **Create**: Add a new contact to a group.
- **Get**: Retrieve details of a specific contact.
- **Update**: Update contact details.
- **Delete**: Remove a contact.
- **Get Many**: Retrieve a list of contacts.

### Groups

- **Create**: Create a new contact group.
- **Get**: Retrieve details of a specific group.
- **Update**: Update a group's name.
- **Delete**: Remove a group.
- **Get Many**: Retrieve a list of contact groups.

### Profile

- **View**: View your profile details.

## Credentials

You need a Text.lk API Access Token to use this node.

1.  Log in to your [Text.lk](https://app.text.lk) account.
2.  Navigate to the API settings to generate an Access Token.
3.  In n8n, add a new credential for **Text.lk API**.
4.  Paste your Access Token.

## Compatibility

- Tested against n8n version 1.0.0+.

## Usage

This node allows you to automate SMS sending and contact management using the Text.lk API. Ensure you have a valid API key and sufficient credit in your Text.lk account.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Text.lk API Documentation](https://text.lk/docs)

## Version history

- **0.1.0**: Initial release with SMS, Contact, Group, and Profile operations.

## License

[MIT](LICENSE.md)
