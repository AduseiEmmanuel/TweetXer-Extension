# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability in TweetXer Extension, please report it responsibly:

1. **Do not** open a public GitHub issue for security vulnerabilities
2. **Email** the maintainer directly or use [GitHub's private vulnerability reporting](https://github.com/AduseiEmmanuel/TweetXer-Extension/security/advisories/new)
3. Include:
   - A description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Any suggested fixes

We will acknowledge your report within **48 hours** and aim to provide a fix within **7 days** for critical issues.

## Security Best Practices for Users

### Extension Permissions
TweetXer requires the following permissions:

| Permission | Why It's Needed |
|------------|----------------|
| `activeTab` | To interact with the currently open Twitter/X tab |
| `storage` | To save your settings and preferences locally |
| `host_permissions` (x.com, twitter.com) | To run the content script on Twitter/X pages |

### What TweetXer Does NOT Do
- ❌ Does **not** collect or transmit any personal data
- ❌ Does **not** store your Twitter credentials
- ❌ Does **not** make API calls to any third-party servers
- ❌ Does **not** access any pages outside of x.com and twitter.com
- ❌ Does **not** require any remote backend services

### What TweetXer DOES Do
- ✅ Runs entirely **locally** in your browser
- ✅ Interacts directly with Twitter/X's own web interface
- ✅ Stores only user-defined settings in Chrome's local storage
- ✅ All processing happens on your machine

## Safe Usage Guidelines

1. **Download from trusted sources only** — only install from the [Chrome Web Store](https://chrome.google.com/webstore) or by loading directly from this repository
2. **Review permissions** before installing any browser extension
3. **Keep Chrome updated** to benefit from the latest security patches
4. **Be cautious** — TweetXer performs **irreversible deletions**. Always back up your data via Twitter's export feature before use
5. **Use the skip count** feature to avoid accidentally deleting recent tweets

## Third-Party Dependencies

TweetXer Extension has **no third-party JavaScript dependencies**. All code runs natively in the browser using vanilla JavaScript.

## Data Privacy

TweetXer does not collect, transmit, or store any personal data on external servers. Your Twitter data never leaves your browser. See our [Privacy Policy section in the README](README.md) for more details.
