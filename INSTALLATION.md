# 📦 TweetXer Installation Guide

This guide walks you through every way to install the TweetXer Chrome Extension on your computer.

---

## System Requirements

| Requirement | Details |
|---|---|
| Browser | Google Chrome 88+ (or any Chromium-based browser: Edge, Brave, Opera) |
| Operating System | Windows 10/11, macOS 10.14+, Linux (any modern distro) |
| Twitter/X Account | You must be logged in to use the extension |
| Internet | Required to connect to Twitter/X |

---

## Method 1: Developer Mode (Recommended for Now)

This is the primary installation method while the extension is not yet listed on the Chrome Web Store.

### Step 1: Download the Extension Files

**Option A — Download as ZIP:**
1. Go to the [TweetXer GitHub repository](https://github.com/AduseiEmmanuel/TweetXer-Extension)
2. Click the green **Code** button
3. Select **Download ZIP**
4. Extract the ZIP to a permanent folder on your computer (e.g., `Documents/TweetXer-Extension`)

> ⚠️ **Important:** Do not delete or move this folder after installation. Chrome loads the extension directly from this location.

**Option B — Clone with Git:**
```bash
git clone https://github.com/AduseiEmmanuel/TweetXer-Extension.git
```

---

### Step 2: Enable Developer Mode in Chrome

1. Open **Google Chrome**
2. In the address bar, type `chrome://extensions/` and press **Enter**
3. In the top-right corner of the Extensions page, toggle **Developer mode** to **ON**

   ![Developer mode toggle is located in the top-right of the chrome://extensions page]

---

### Step 3: Load the Extension

1. Click **Load unpacked** (appears after enabling Developer mode)
2. In the file picker, navigate to and select the `TweetXer-Extension` folder you downloaded
3. Click **Select Folder**

The extension should now appear in your extensions list with the 🗑️ TweetXer icon.

---

### Step 4: Pin the Extension (Optional)

1. Click the **puzzle piece** icon (🧩) in the Chrome toolbar
2. Find **TweetXer** in the dropdown list
3. Click the **pin** icon next to it so it always shows in your toolbar

---

## Method 2: Chrome Web Store (Coming Soon)

A Chrome Web Store listing is planned for a future release. When available:

1. Visit the Chrome Web Store listing for TweetXer
2. Click **Add to Chrome**
3. Click **Add extension** in the confirmation dialog

---

## Verifying the Installation

After loading the extension, confirm everything is working:

1. Open `chrome://extensions/` — TweetXer should be listed as **Enabled**
2. Visit [x.com](https://x.com) and log in to your account
3. Navigate to your **profile page** — you should see a TweetXer panel appear at the top of the page
4. Click the 🗑️ TweetXer icon in your Chrome toolbar — the popup should open

If you see the TweetXer panel on your profile page, the extension is working correctly.

---

## Keeping the Extension Up to Date

Because the extension is loaded in developer mode, Chrome does **not** auto-update it.

To update manually:
1. Download the latest version from the [GitHub repository](https://github.com/AduseiEmmanuel/TweetXer-Extension)
2. Replace the contents of your extension folder with the new files
3. Go to `chrome://extensions/` and click the **refresh** (↺) icon on the TweetXer card

---

## Troubleshooting

### ❌ "Load unpacked" button is missing
- Make sure **Developer mode** is toggled **ON** in the top-right corner of `chrome://extensions/`

### ❌ Extension appears but TweetXer panel doesn't show on Twitter/X
- Make sure you are **logged in** to your Twitter/X account
- Navigate directly to your **profile page** (e.g., `x.com/your_username`)
- Try refreshing the page with `Ctrl+R` / `Cmd+R`
- Check that the extension is **Enabled** (not paused) in `chrome://extensions/`

### ❌ "Could not load extension" error
- Make sure you selected the correct folder (the one that contains `manifest.json`)
- The folder should NOT be a nested subfolder — select the root `TweetXer-Extension` directory

### ❌ Extension stops working after Chrome update
- Some Chrome updates require reloading unpacked extensions
- Go to `chrome://extensions/` and click the **refresh** icon on the TweetXer card
- If it still doesn't work, try removing and re-adding the extension

### ❌ Icons are missing / extension looks broken
- Verify the `icons/` folder exists inside your extension directory
- If missing, open `generate-icons.html` in your browser, click **Download All**, and save the icon files into the `icons/` folder

### ❌ Extension works in Chrome but not in another browser
- This extension supports any Chromium-based browser (Edge, Brave, Opera, etc.)
- Follow the same steps above but open your browser's equivalent extension management page:
  - **Edge:** `edge://extensions/`
  - **Brave:** `brave://extensions/`
  - **Opera:** `opera://extensions/`

---

## Uninstalling

1. Go to `chrome://extensions/`
2. Find **TweetXer**
3. Click **Remove**
4. Optionally delete the extension folder from your computer

---

## Next Steps

After installation, read the **[USAGE.md](USAGE.md)** guide to learn how to use all features.
