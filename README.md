# 🗑️ TweetXer — Chrome Extension

> Delete all your Tweets, Likes, DMs, and more — for free, directly in your browser.

TweetXer is a Chrome Extension based on the popular [TweetXer userscript](https://github.com/lucahammer/tweetXer/). No third-party service. No account access required beyond your own Twitter/X login.

[![Version](https://img.shields.io/badge/version-1.0.0-blue)](CHANGELOG.md)
[![License](https://img.shields.io/badge/license-NoHarm--draft-green)](#license)
[![Chrome](https://img.shields.io/badge/browser-Chrome%2088%2B-orange)](#system-requirements)

---

## ✨ Features

| Feature | Description | Speed |
|---|---|---|
| 🗑️ **Delete Tweets** | Bulk delete using your data export | 10,000–20,000 / hour |
| 💔 **Delete Likes** | Remove all your liked tweets | ~500 per 15 min |
| 💬 **Delete DMs** | Clear all direct message conversations | ~800 per 15 min |
| 🔖 **Export Bookmarks** | Save bookmarks to JSON (not in official export) | Varies |
| 👋 **Unfollow Everyone** | Unfollow all accounts for a fresh start | Rate limited |
| 🐢 **Slow Delete** | Delete tweets without a data export file | ~4,000 / hour |

**All operations run entirely in your browser. No data is sent to any third-party server.**

---

## 🚀 Quick Start

1. **Download** this repository ([ZIP](https://github.com/AduseiEmmanuel/TweetXer-Extension/archive/refs/heads/main.zip) or `git clone`)
2. Open Chrome → `chrome://extensions/` → enable **Developer mode**
3. Click **Load unpacked** and select the `TweetXer-Extension` folder
4. Go to [x.com](https://x.com), log in, and navigate to your profile
5. The **TweetXer panel** appears at the top of the page — you're ready to go!

📘 Full installation steps: **[INSTALLATION.md](INSTALLATION.md)**

---

## 📖 Documentation

| Document | Description |
|---|---|
| [INSTALLATION.md](INSTALLATION.md) | Step-by-step setup, troubleshooting, system requirements |
| [USAGE.md](USAGE.md) | Complete user guide for all features |
| [CHANGELOG.md](CHANGELOG.md) | Version history, known limitations, roadmap |

---

## 🔑 How to Use (Overview)

### With Data Export — Fastest Method

1. Request your data archive: **Settings → Your Account → Download an archive of your data**
2. Wait for the email from Twitter/X (up to 24–48 hours), then extract the ZIP
3. On your X/Twitter profile page, use the TweetXer panel to upload the relevant file:
   - `data/tweet-headers.js` → Delete Tweets
   - `data/like.js` → Delete Likes
   - `data/direct-message-headers.js` → Delete DMs
4. Click the action button and watch the progress bar

### Without Data Export — Slow Delete

1. Go to your profile on X/Twitter
2. Open **Advanced Options** in the TweetXer panel
3. Click **Slow Delete**

See **[USAGE.md](USAGE.md)** for full walkthroughs of every feature.

---

## ⚡ Rate Limits

TweetXer automatically handles Twitter/X rate limits. When a limit is hit, a countdown timer appears and the extension resumes automatically.

| Action | Approximate Limit |
|---|---|
| Delete Tweets (with export) | 10,000–20,000 / hour |
| Delete Tweets (slow mode) | ~4,000 / hour |
| Delete Likes | ~500 per 15 minutes |
| Delete DMs | ~800 per 15 minutes |

---

## ❓ FAQ

**Is TweetXer free?**
Yes. TweetXer is free and open source.

**Does TweetXer store my data or password?**
No. It runs in your browser using your existing Twitter/X login session. Nothing is sent to any external server.

**Can I stop and resume a deletion?**
Yes. Use the **Skip Count** option in Advanced Options to skip items already processed.

**What browsers are supported?**
Google Chrome 88+ and any Chromium-based browser (Edge, Brave, Opera).

**Will this get my account banned?**
TweetXer respects Twitter/X rate limits. However, deleting large amounts of content is unusual activity — use it responsibly.

---

## 🔒 Privacy

- ✅ Runs **entirely in your browser**
- ✅ Uses your existing Twitter/X login
- ✅ **Does NOT** send data to any third party
- ✅ **Does NOT** store your credentials
- ✅ No analytics, no tracking

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes
4. Commit: `git commit -m "Add my feature"`
5. Push: `git push origin feature/my-feature`
6. Open a Pull Request

Please open an [Issue](https://github.com/AduseiEmmanuel/TweetXer-Extension/issues) first to discuss significant changes.

---

## 👏 Credits

**Chrome Extension Conversion by:** HOPESON

Based on the [TweetXer userscript](https://github.com/lucahammer/tweetXer/) by:
- [Luca Hammer](https://github.com/lucahammer)
- dbort
- pReya
- Micolithe
- STrRedWolf

---

## 📄 License

NoHarm-draft License — see the [original project](https://github.com/lucahammer/tweetXer/) for full license details.

---

## 🐛 Support

- [Open an Issue](https://github.com/AduseiEmmanuel/TweetXer-Extension/issues)
- See [INSTALLATION.md](INSTALLATION.md) for installation troubleshooting
- See [USAGE.md](USAGE.md) for usage troubleshooting

---

> ⚠️ **Warning:** Deletions are **permanent**. Always download and keep your data export before deleting anything.
