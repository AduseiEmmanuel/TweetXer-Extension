# 📖 TweetXer Usage Guide

TweetXer lets you bulk-delete or export Twitter/X content directly from your browser — no third-party service required.

> ⚠️ **Warning:** Deletions are **permanent**. Twitter/X does not let you undo deleted tweets, likes, DMs, or unfollows. Always download your data export and keep a local copy before deleting anything.

---

## Table of Contents

1. [Opening TweetXer](#opening-tweetxer)
2. [Getting Your Twitter/X Data Export](#getting-your-twitterx-data-export)
3. [Deleting Tweets (Fast Mode)](#deleting-tweets-fast-mode)
4. [Deleting Likes / Favorites](#deleting-likes--favorites)
5. [Deleting Direct Messages](#deleting-direct-messages)
6. [Exporting Bookmarks](#exporting-bookmarks)
7. [Unfollowing Everyone](#unfollowing-everyone)
8. [Slow Delete (No Export File)](#slow-delete-no-export-file)
9. [Advanced Options](#advanced-options)
10. [Rate Limits & Throttling](#rate-limits--throttling)
11. [Safety & Best Practices](#safety--best-practices)
12. [Frequently Asked Questions](#frequently-asked-questions)
13. [Troubleshooting](#troubleshooting)

---

## Opening TweetXer

After [installing the extension](INSTALLATION.md):

1. Go to [x.com](https://x.com) and log in to your account
2. Navigate to your **profile page** (click your avatar or go to `x.com/your_username`)
3. The **TweetXer panel** automatically appears at the top of the page

You can also click the 🗑️ **TweetXer icon** in the Chrome toolbar to open the popup, which has a quick link to open Twitter/X.

---

## Getting Your Twitter/X Data Export

The **fast deletion methods** (tweets, likes, DMs) require your official Twitter/X data export. This contains structured data that TweetXer reads to identify and delete your content at maximum speed.

### How to Request Your Data Export

1. Log in to [x.com](https://x.com)
2. Go to **Settings** → **Your Account** → **Download an archive of your data**
3. Confirm your identity (enter password or 2FA code)
4. Click **Request archive**
5. Wait for an email from Twitter/X — this can take **24 to 48 hours** (sometimes longer for large accounts)
6. When the email arrives, click the download link and save the ZIP file
7. **Extract the ZIP file** to a folder on your computer — you'll need specific `.js` files from inside it

### Files Used by TweetXer

| Action | File from Data Export |
|---|---|
| Delete Tweets | `data/tweet-headers.js` or `data/tweets.js` |
| Delete Likes | `data/like.js` |
| Delete DMs | `data/direct-message-headers.js` |

> 📌 The exact file paths are `<your-export-folder>/data/<filename>.js`

---

## Deleting Tweets (Fast Mode)

This method deletes thousands of tweets per hour using your data export file.

**Estimated speed:** 10,000–20,000 tweets/hour

### Steps

1. Make sure you have your [data export](#getting-your-twitterx-data-export) ready
2. Go to [x.com](https://x.com) and navigate to your profile page
3. In the **TweetXer panel**, click **Choose File**
4. Select `tweet-headers.js` (or `tweets.js`) from your data export folder
5. TweetXer will load the tweet IDs and display a count
6. Click **Delete Tweets**
7. Watch the progress bar — TweetXer will work automatically through all your tweets

> 💡 You can leave the tab open and do other things. TweetXer runs in the background.

---

## Deleting Likes / Favorites

**Estimated speed:** ~500 likes per 15 minutes (Twitter/X rate limit)

### Steps

1. Make sure you have your [data export](#getting-your-twitterx-data-export) ready
2. Go to [x.com](https://x.com) and navigate to your profile page
3. In the **TweetXer panel**, click **Choose File**
4. Select `like.js` from your data export folder
5. TweetXer will load your liked tweet IDs and display a count
6. Click **Delete Likes**
7. The extension will process your likes and automatically pause if Twitter/X rate limits are hit, then resume

---

## Deleting Direct Messages

**Estimated speed:** ~800 DMs per 15 minutes (Twitter/X rate limit)

> ⚠️ **Note:** Deleting a DM removes it from **your view only**. The other person in the conversation still has their copy.

### Delete All DMs

1. Make sure you have your [data export](#getting-your-twitterx-data-export) ready
2. Go to [x.com](https://x.com) and navigate to your profile page
3. In the **TweetXer panel**, click **Choose File**
4. Select `direct-message-headers.js` from your data export folder
5. TweetXer will load your DM conversation IDs
6. Click **Delete DMs**

### Delete a Single Conversation

You can also remove individual conversations manually from the Twitter/X DM interface. TweetXer works best for bulk deletion.

---

## Exporting Bookmarks

Twitter/X does **not** include bookmarks in the official data export. TweetXer lets you export them yourself.

> ⚠️ **Note:** Twitter/X does not provide an API for bookmarks, so TweetXer scrolls through your bookmarks page automatically. This is slower than the other methods.

### Steps

1. Go to [x.com](https://x.com) and navigate to your profile page
2. In the **TweetXer panel**, click **Advanced Options**
3. Click **Export Bookmarks**
4. TweetXer will scroll through your bookmarks and collect them
5. When complete, a JSON file will be downloaded automatically
6. Open the JSON file to see your bookmarks with tweet URLs and metadata

---

## Unfollowing Everyone

This feature unfollows all accounts you currently follow. Useful for a complete fresh start.

> ⚠️ **Warning:** This action cannot be undone. Twitter/X does not provide a way to re-follow everyone automatically.

### Steps

1. Go to [x.com](https://x.com) and navigate to your profile page
2. In the **TweetXer panel**, click **Advanced Options**
3. Click **Unfollow All**
4. TweetXer will begin unfollowing accounts one by one
5. The process pauses automatically if rate limits are reached, then resumes

---

## Slow Delete (No Export File)

If you don't have a data export, you can still delete tweets using Slow Delete mode. TweetXer scrolls your timeline and deletes what it finds.

**Estimated speed:** ~4,000 tweets/hour

> 💡 This method is slower because it has to load and scroll through your tweets one at a time rather than working from a pre-built list.

### Steps

1. Go to [x.com](https://x.com) and navigate to your profile page
2. In the **TweetXer panel**, click **Advanced Options**
3. Click **Slow Delete**
4. TweetXer will begin scrolling and deleting tweets automatically
5. Leave the tab open — do not close it while Slow Delete is running

---

## Advanced Options

To reveal Advanced Options, click the **Advanced Options** button in the TweetXer panel.

| Option | Description |
|---|---|
| **Slow Delete** | Delete tweets without needing a data export file |
| **Export Bookmarks** | Save your bookmarks to a local JSON file |
| **Unfollow All** | Unfollow every account you follow |
| **Skip Count** | Skip the first N items (useful for resuming a partial deletion) |

---

## Rate Limits & Throttling

Twitter/X enforces rate limits on all API calls. TweetXer is designed to handle these automatically.

### Rate Limit Reference

| Action | Approximate Limit |
|---|---|
| Delete Tweets (with export) | 10,000–20,000 / hour |
| Delete Tweets (slow mode) | ~4,000 / hour |
| Delete Likes | ~500 per 15 minutes |
| Delete DMs | ~800 per 15 minutes |
| Unfollow | Twitter/X enforces strict limits; TweetXer pauses automatically |

### What Happens When You Hit a Rate Limit

- TweetXer **automatically detects** rate limit errors from Twitter/X
- A **countdown timer** is displayed in the panel showing how long until the limit resets
- After the reset period, TweetXer **resumes automatically** — no action needed from you
- Do not close or refresh the page while waiting

---

## Safety & Best Practices

### Before You Start

- ✅ **Download your data export first** — keep a permanent local backup
- ✅ **Read the progress display** — always confirm what file you uploaded and the item count before starting
- ✅ **Close other Twitter/X tabs** — multiple tabs can interfere with rate limit calculations
- ✅ **Stay logged in** — if your session expires mid-deletion, TweetXer will stop and you'll need to log in and restart

### During Deletion

- ✅ **Keep the tab open** — TweetXer runs in the browser tab; closing it stops the process
- ✅ **Don't start multiple operations at once** — run one deletion type at a time
- ✅ **Watch for error messages** — if the panel shows an error, check your Twitter/X login status

### After Deletion

- ✅ **Verify results** — some tweets may not delete if they are part of replies or have been retweeted; check manually
- ✅ **Understand propagation delay** — deleted content may still appear in search results or third-party apps for a short time after deletion

---

## Frequently Asked Questions

**Q: Is TweetXer free?**
A: Yes, TweetXer is completely free and open source.

**Q: Does TweetXer store my data?**
A: No. TweetXer runs entirely in your browser and uses your own Twitter/X session. No data is ever sent to a third-party server.

**Q: Will TweetXer get my account banned?**
A: TweetXer respects Twitter/X rate limits and uses the same API calls your browser would make normally. However, deleting large volumes of content in a short time is unusual activity. Use the extension responsibly.

**Q: Can I stop and resume later?**
A: Yes. If you stop a deletion, you can use the **Skip Count** option in Advanced Options to skip items that have already been deleted and resume from where you left off.

**Q: My data export only shows 3,200 tweets but I have more. Why?**
A: Twitter/X's public timeline API is limited to the most recent 3,200 tweets. Your full tweet archive (from the data export) contains all tweets. This is why using the data export file is recommended for large accounts.

**Q: Does deleting tweets also delete retweets of my tweets?**
A: Deleting your tweet removes it from your account. Other users who retweeted it will see the original is gone, but their retweets may still appear depending on platform behavior.

**Q: Can I delete only tweets before a certain date?**
A: This feature is not currently built in. The full tweet list from your export will be processed. Use **Skip Count** in Advanced Options to work around this in some cases.

---

## Troubleshooting

### TweetXer panel doesn't appear on my profile

- Make sure you are on your own **profile page**, not the home feed
- Confirm the extension is **enabled** in `chrome://extensions/`
- Try a **hard refresh**: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (macOS)
- Try opening a new tab and navigating to your profile again

### "File content not recognized" error

- Confirm you are selecting a `.js` file from the official Twitter/X data export
- The file should be inside the `data/` folder of your extracted ZIP
- Common valid files: `tweet-headers.js`, `like.js`, `direct-message-headers.js`
- Do not rename or edit these files before uploading

### Deletion appears stuck / progress bar stopped

- Check your internet connection
- Twitter/X may have rate-limited you — wait for the countdown timer
- Try refreshing the page and uploading the file again
- Use **Skip Count** to resume from a point past where you stopped

### Extension stopped working after a Chrome update

- Go to `chrome://extensions/` and click the **refresh** (↺) icon on the TweetXer card
- If the problem persists, remove the extension and re-add it using the [Installation Guide](INSTALLATION.md)

---

For more help, see the [GitHub Issues page](https://github.com/AduseiEmmanuel/TweetXer-Extension/issues).
