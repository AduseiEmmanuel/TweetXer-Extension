# 📅 TweetXer Changelog

All notable changes to the TweetXer Chrome Extension are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] — 2024

### 🎉 Initial Release

This is the first release of TweetXer as a Chrome Extension. It is based on the [TweetXer userscript](https://github.com/lucahammer/tweetXer/) by Luca Hammer, dbort, pReya, Micolithe, and STrRedWolf, re-packaged as a Chrome Extension by HOPESON.

### ✅ Features Added

- **Delete All Tweets** — Fast bulk deletion using the official Twitter/X data export file (`tweet-headers.js`). Processes 10,000–20,000 tweets per hour.
- **Delete Likes / Favorites** — Bulk removal of all liked tweets using the `like.js` data export file. Subject to Twitter/X rate limits (~500 per 15 minutes).
- **Delete Direct Messages** — Bulk deletion of DM conversations using the `direct-message-headers.js` export file (~800 per 15 minutes).
- **Export Bookmarks** — Export all saved bookmarks to a local JSON file. Bookmarks are not included in Twitter/X's official data export.
- **Unfollow Everyone** — Automatically unfollow all accounts you currently follow.
- **Slow Delete Mode** — Delete tweets without a data export file by scrolling and deleting from your profile (~4,000 tweets per hour).
- **Rate Limit Handling** — Automatic detection of Twitter/X API rate limits with countdown timer and auto-resume.
- **Progress Indicator** — Live progress bar and status messages during all operations.
- **Advanced Options Panel** — Toggle for accessing Slow Delete, Export Bookmarks, Unfollow All, and Skip Count.
- **Skip Count** — Option to skip the first N items, allowing resumption of a partial deletion.
- **Chrome Extension Popup** — Toolbar popup with quick access link to open X/Twitter and feature overview.

### 📋 Technical Details

- Manifest version: **3** (Chrome's current standard)
- Permissions: `activeTab`, `storage`
- Supported domains: `x.com`, `twitter.com`, `mobile.x.com`, `mobile.twitter.com`
- Content script runs at `document_idle`

### ⚠️ Known Limitations

- **Twitter/X rate limits** — Deletion speed is capped by Twitter/X API limits. The extension pauses automatically when limits are reached.
- **3,200 tweet timeline limit** — Twitter/X's public API only surfaces the most recent 3,200 tweets. For full deletion, the data export file is required.
- **Bookmarks API unavailable** — Twitter/X does not expose a bookmarks API, so Export Bookmarks works by scrolling the bookmarks page and may be slow for large collections.
- **DMs deleted from your view only** — Deleting a DM removes it from your account. The other participant's copy is not affected.
- **Retweets and replies** — Some tweets that are replies to deleted tweets or are deeply embedded in threads may not delete cleanly.
- **Account-specific behavior** — Twitter/X occasionally changes its internal API, which may temporarily affect functionality. Check for extension updates if issues occur.
- **No undo** — All deletions are permanent. There is no way to recover deleted content through this extension.

---

## 🗺️ Roadmap

Planned features and improvements for future releases:

- [ ] **Date range filtering** — Delete only tweets before or after a specified date
- [ ] **Keyword filtering** — Delete only tweets containing specific words or hashtags
- [ ] **Whitelist protection** — Specify tweet IDs or keywords to protect from deletion
- [ ] **Chrome Web Store listing** — Official store distribution for easier installation and updates
- [ ] **Progress persistence** — Save deletion progress so you can safely close and reopen the browser
- [ ] **Multi-account support** — Switch between accounts without manually re-uploading files
- [ ] **Retry failed items** — Automatically collect and retry items that failed to delete
- [ ] **CSV / JSON export** — Export deleted tweet metadata before deletion for archiving purposes

---

## How to Contribute

See the [Contributing](#contributing) section in the [README](README.md) for information on how to report bugs, suggest features, or submit code changes.
