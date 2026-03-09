// Popup script for TweetXer extension

document.getElementById('openTwitter').addEventListener('click', () => {
    chrome.tabs.create({ url: 'https://x.com' });
});
