# 🗑️ TweetXer - Chrome Extension

Delete all your Tweets, Likes, DMs, and more for free. This is a Chrome extension version of the popular TweetXer userscript.

## Features

- ✅ **Delete Tweets** - Fast deletion with data export (10,000-20,000/hour)
- ✅ **Delete Likes/Favorites** - Remove all your likes (~500 per 15 min)
- ✅ **Delete Direct Messages** - Clear all DM conversations (~800 per 15 min)
- ✅ **Export Bookmarks** - Save your bookmarks (not in official export)
- ✅ **Unfollow Everyone** - Fresh start by unfollowing all accounts
- ✅ **Slow Delete Mode** - Delete without data export file (~4,000/hour)

## Installation

### Step 1: Download the Extension

1. Download or clone this folder to your computer
2. Make note of the folder location

### Step 2: Load in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top right corner)
3. Click **Load unpacked**
4. Select the `TweetXer-Extension` folder
5. The extension is now installed!

### Step 3: (Optional) Add Icons

1. Open `generate-icons.html` in your browser
2. Click "Download All" to get the icon files
3. Save them to the `icons` folder
4. Add icon references back to `manifest.json` if desired

## How to Use

### Method 1: With Data Export (Recommended - Fastest)

1. **Request your Twitter/X data export:**
   - Go to Settings → Your Account → Download an archive of your data
   - Wait for the email from Twitter/X (can take 24+ hours)
   - Download and extract the ZIP file

2. **Go to X/Twitter:**
   - Navigate to [x.com](https://x.com) and log in
   - Go to your profile page

3. **Use TweetXer:**
   - The TweetXer panel appears at the top of the page
   - Click "Choose File" and select one of these files from your data export:
     - `tweet-headers.js` - To delete tweets
     - `like.js` - To delete likes
     - `direct-message-headers.js` - To delete DMs
   - Watch the progress bar as items are deleted!

### Method 2: Without Data Export (Slower)

1. Go to [x.com](https://x.com) and navigate to your profile
2. Click "Advanced Options" in the TweetXer panel
3. Click "Slow Delete" button
4. The extension will automatically scroll through and delete your tweets

### Export Bookmarks

1. Go to your profile on X/Twitter
2. Click "Advanced Options" in the TweetXer panel
3. Click "Export Bookmarks"
4. Download the generated JSON file

### Unfollow Everyone

1. Go to your profile on X/Twitter
2. Click "Advanced Options" in the TweetXer panel
3. Click "Unfollow All"
4. The extension will unfollow each account

## Rate Limits

Twitter/X has rate limits. If you hit them, the extension will automatically wait and resume:

| Action | Rate Limit |
|--------|------------|
| Delete Tweets (with export) | ~10,000-20,000/hour |
| Delete Tweets (slow mode) | ~4,000/hour |
| Delete Likes | ~500 per 15 minutes |
| Delete DMs | ~800 per 15 minutes |

## Troubleshooting

### Panel doesn't appear
- Make sure you're logged into Twitter/X
- Try refreshing the page
- Navigate to your profile page

### "File content not recognized"
- Make sure you're using files from the official Twitter/X data export
- The file should be a `.js` file (e.g., `tweet-headers.js`)

### Rate limit errors
- The extension handles this automatically
- Just wait for the countdown timer to finish

### Extension not working
- Check the browser console (F12) for errors
- Make sure the extension is enabled in `chrome://extensions/`
- Try reloading the extension

## Privacy

This extension:
- ✅ Runs entirely in your browser
- ✅ Uses your existing Twitter/X login
- ✅ Does NOT send data to any third party
- ✅ Does NOT store your credentials

## Credits

**Chrome Extension Conversion by:** HOPESON

Based on the [TweetXer userscript](https://github.com/lucahammer/tweetXer/) by:
- Luca Hammer
- dbort
- pReya
- Micolithe
- STrRedWolf

## License

NoHarm-draft License - See original project for details.

## Support

For issues and questions:
- [GitHub Issues](https://github.com/lucahammer/tweetXer/issues)

---

**⚠️ Warning:** Deleting tweets is permanent. Make sure you have a backup of any tweets you want to keep before using this tool.
