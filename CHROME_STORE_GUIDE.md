# Chrome Web Store Publishing Guide

## Overview

This guide walks you through publishing the TweetXer Extension to the Chrome Web Store.

---

## Prerequisites

- A Google account
- A one-time $5 developer registration fee
- A ZIP file of the extension
- Screenshots of the extension in action

---

## Step 1: Prepare the Extension ZIP

Run the following command from the project root:

```bash
npm run pack
```

Or manually create the ZIP (exclude hidden files and development files):

```bash
zip -r tweetxer-extension.zip manifest.json content.js popup.html popup.js icons/ README.md
```

**The ZIP must contain:**
- `manifest.json`
- `content.js`
- `popup.html`
- `popup.js`
- `icons/16x16.png`
- `icons/48x48.png`
- `icons/128x128.png`

---

## Step 2: Register as a Chrome Web Store Developer

1. Go to the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
2. Sign in with your Google account
3. Pay the one-time **$5 developer registration fee**
4. Accept the developer agreement

---

## Step 3: Create a New Item

1. Click **"New Item"** in the Developer Dashboard
2. Upload your `tweetxer-extension.zip`
3. Chrome will validate the manifest and display any errors

---

## Step 4: Fill in Store Listing Details

### Store Listing Template

**Name:**
```
TweetXer - Delete Tweets, Likes & DMs
```

**Short Description (132 characters max):**
```
Delete all your Tweets, Likes, Direct Messages, and more on X (Twitter) — fast, free, and all in one place.
```

**Full Description:**
```
TweetXer is a powerful Chrome extension that lets you clean up your X (Twitter) account quickly and easily. Whether you want to start fresh or remove old content, TweetXer has you covered.

🗑️ FEATURES:
• Delete All Tweets — Use your Twitter data export for fast bulk deletion
• Delete Favorites/Likes — Remove all liked tweets
• Delete Direct Messages — Clear individual conversations or all DMs at once
• Export Bookmarks — Save your bookmarks before deleting
• Unfollow Everyone — Mass unfollow with a single click
• Slow Delete Mode — Manual tweet-by-tweet deletion without needing an export

⚡ FAST & FREE:
• No account required — works directly with your logged-in session
• No data collected — everything runs locally in your browser
• No subscription fees — completely free to use

🔒 PRIVACY FIRST:
• All processing happens locally in your browser
• No data is sent to external servers
• Requires only necessary permissions (activeTab, storage)

📋 HOW TO USE:
1. Log in to X (Twitter) at x.com
2. Click the TweetXer icon in your Chrome toolbar
3. Follow the on-screen instructions
4. For fast tweet deletion: upload your Twitter data export file

⚠️ WARNING: Deletions are permanent and cannot be undone. Always export your Twitter data first!

DISCLAIMER: This extension interacts with the Twitter/X web interface. Changes to the Twitter/X website may occasionally affect functionality.
```

**Category:** `Productivity`

**Language:** `English`

---

## Step 5: Upload Screenshots

Screenshots must be **1280x800** or **640x400** pixels (PNG or JPEG).

**Required Screenshots (at least 1, recommended 5):**

1. **Main popup** — Show the extension popup with all feature buttons
2. **Tweet deletion in progress** — Show the deletion counter running
3. **Settings/options** — Show any configurable options
4. **Before and After** — Compare tweet counts
5. **Data export upload** — Show the file upload interface

### Taking Screenshots:
1. Open Chrome DevTools (`F12`)
2. Toggle device toolbar (`Ctrl+Shift+M`)
3. Set viewport to 1280x800
4. Navigate to x.com
5. Activate the extension and capture screenshots

---

## Step 6: Set the Store Icon

Upload a **128x128 PNG** icon for the store listing. Use `icons/128x128.png` from this repository.

---

## Step 7: Privacy Practices

In the Privacy tab, declare:

- **Does your extension collect user data?** No
- **Single purpose description:** Delete tweets, likes, DMs, and other content from a user's X (Twitter) account
- **Permissions justification:**
  - `activeTab`: Needed to interact with the active Twitter/X tab
  - `storage`: Needed to save user preferences locally
  - `host_permissions`: Needed to run the content script on twitter.com and x.com

---

## Step 8: Submit for Review

1. Click **"Submit for Review"**
2. Google typically reviews within **1–3 business days**
3. You'll receive an email when approved or if changes are required

---

## Privacy Policy Requirements

The Chrome Web Store requires a privacy policy. Here is a minimal template:

```
Privacy Policy for TweetXer Extension

Last updated: [Insert the current date, e.g., January 1, 2025]

TweetXer Extension ("the Extension") does not collect, store, or transmit any personal data.

DATA PROCESSING:
All processing occurs locally within your browser. The Extension interacts with the Twitter/X website solely to perform actions requested by the user (such as deleting tweets). No data is sent to any external servers.

LOCAL STORAGE:
The Extension may save user preferences (such as skip count settings) using Chrome's local storage API. This data remains on your device and is never transmitted.

THIRD-PARTY SERVICES:
The Extension does not use any third-party analytics, tracking, or data collection services.

CONTACT:
For privacy concerns, open an issue at: https://github.com/AduseiEmmanuel/TweetXer-Extension/issues
```

Host this privacy policy on a public URL (e.g., GitHub Pages or a Gist) and paste the URL in the Developer Dashboard.

---

## Common Rejection Reasons

- **Missing or invalid icons** — Ensure all icon sizes are present and valid PNGs
- **Misleading description** — Keep the description accurate and non-promotional
- **Excessive permissions** — Only request permissions you actually use
- **No privacy policy** — Required if any data is handled
- **Unclear functionality** — The description must clearly explain what the extension does

---

## Updating the Extension

1. Increment the `version` in `manifest.json` (e.g., `1.0.0` → `1.1.0`)
2. Create a new ZIP file
3. Upload via the Developer Dashboard
4. Add release notes describing what changed
5. Submit for review
