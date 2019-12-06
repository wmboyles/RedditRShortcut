chrome.omnibox.onInputEntered.addListener((text) => {
    var newURL = "https://reddit.com/u/" + text;
    chrome.tabs.update({url: newURL});
});