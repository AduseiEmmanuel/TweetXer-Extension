# Contributing to TweetXer Extension

Thank you for your interest in contributing to TweetXer! We welcome contributions from everyone.

## Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/AduseiEmmanuel/TweetXer-Extension.git
   cd TweetXer-Extension
   ```

2. **Load the extension in Chrome (Developer Mode)**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable **Developer Mode** (toggle in the top-right corner)
   - Click **Load unpacked** and select the `TweetXer-Extension` folder
   - The extension should now appear in your Chrome toolbar

3. **Make your changes** to the source files

4. **Reload the extension** after changes:
   - Go back to `chrome://extensions/`
   - Click the refresh icon on the TweetXer card

## Project Structure

```
TweetXer-Extension/
├── manifest.json       # Chrome extension configuration
├── content.js          # Main extension logic (runs on x.com/twitter.com)
├── popup.html          # Extension popup UI
├── popup.js            # Popup interaction handler
├── icons/              # Extension icon files
│   ├── 16x16.png
│   ├── 48x48.png
│   └── 128x128.png
└── README.md           # Project documentation
```

## Code Style Guidelines

- Use **2-space indentation** for JavaScript and HTML files
- Write **descriptive variable and function names**
- Add **comments** for complex logic blocks
- Follow existing code patterns in `content.js`
- Use `TweetsXer.<property>` instead of `this.<property>` inside callbacks (due to context binding)

## Making Changes

### For Bug Fixes
1. Create a branch: `git checkout -b fix/description-of-bug`
2. Fix the bug with minimal changes
3. Test the fix manually on x.com / twitter.com
4. Submit a pull request

### For New Features
1. Open an issue first to discuss the feature
2. Create a branch: `git checkout -b feature/feature-name`
3. Implement the feature
4. Test thoroughly on x.com / twitter.com
5. Update `README.md` if the feature is user-facing
6. Submit a pull request

## Pull Request Process

1. Ensure your branch is up to date with `main`
2. Describe **what** you changed and **why** in the PR description
3. Include steps to **test** your changes
4. Reference any related issues using `Fixes #123` or `Closes #123`
5. Wait for review — we aim to respond within a few days

## Testing Your Changes

Since this is a browser extension, testing is done manually:

1. Load the extension in Chrome Developer Mode
2. Navigate to [x.com](https://x.com) and log in
3. Open the extension popup and verify UI looks correct
4. Test the specific feature you changed
5. Check the browser console (`F12`) for any errors

## Reporting Issues

- Use [GitHub Issues](https://github.com/AduseiEmmanuel/TweetXer-Extension/issues)
- Describe the problem clearly with steps to reproduce
- Include your Chrome version and OS
- Attach screenshots if relevant

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
