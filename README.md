# n8n-nodes-textdotlk

[![npm version](https://img.shields.io/npm/v/n8n-nodes-textdotlk.svg)](https://www.npmjs.com/package/n8n-nodes-textdotlk)
[![npm downloads](https://img.shields.io/npm/dm/n8n-nodes-textdotlk.svg)](https://www.npmjs.com/package/n8n-nodes-textdotlk)
[![GitHub license](https://img.shields.io/github/license/NPFernando/n8n-nodes-textdotlk.svg)](https://github.com/NPFernando/n8n-nodes-textdotlk/blob/main/LICENSE.md)
[![GitHub issues](https://img.shields.io/github/issues/NPFernando/n8n-nodes-textdotlk.svg)](https://github.com/NPFernando/n8n-nodes-textdotlk/issues)

This is an n8n community node package for the [Text.lk](https://text.lk) service. It allows you to integrate Text.lk SMS functionality into your n8n workflows.

[n8n](https://n8n.io/) is a fair-code licensed workflow automation platform.

## Installation

### Community Nodes (Recommended)

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

1. Go to **Settings → Community Nodes**
2. Select **Install a community node**
3. Enter `n8n-nodes-textdotlk`
4. Click **Install**

### npm

To use this node in your n8n installation, you can install it via npm:

```bash
npm install n8n-nodes-textdotlk
```

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
- Development and CI validation use Node.js 20 LTS or newer compatible with the n8n community-node tooling.

## Usage

This node allows you to automate SMS sending and contact management using the Text.lk API. Ensure you have a valid API key and sufficient credit in your Text.lk account.

## Package

- npm: <https://www.npmjs.com/package/n8n-nodes-textdotlk>
- Repository: <https://github.com/NPFernando/n8n-nodes-textdotlk>

## Security

- Store your Text.lk token only in n8n credentials.
- Do not hardcode tokens in workflows, exported workflow JSON, or repository files.
- Route identifier fields are constrained to route-safe alphanumeric values where n8n supports runtime field validation.
- SMS/contact fields include safer format guidance to avoid malformed API requests and accidental sensitive-data exposure.
- CI blocks critical production dependency advisories with `npm run audit:prod`. Current n8n upstream dependency trees can still report non-critical advisories; keep Dependabot enabled and review those updates as they become available.
- Open a GitHub issue for suspected package or node security issues. Do not include real tokens, customer phone numbers, or message contents in public reports.

## Development

Prerequisites:

- Node.js 20 LTS or newer
- npm 10+

```bash
npm ci --ignore-scripts
npm run lint
npm run build
npx tsc --noEmit
npm run audit:prod
npm pack --dry-run
```

Use `npm run validate:package` for the standard local validation gate before publishing or opening a pull request.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Text.lk API Documentation](https://text.lk/docs)

## Version history

- **Unreleased**: Harden dependency tooling, CI validation, package metadata, and safer parameter guidance.
- **0.1.0**: Initial release with SMS, Contact, Group, and Profile operations.

## License

[MIT](LICENSE.md)
