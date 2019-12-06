chrome.omnibox.onInputEntered.addListener((text) => {
    var words = text.split(" ");
    var newURL = "https://reddit.com/r/";
    for(var i = 0; i < words.length; i++){
        if(i != 0) newURL += "+";
        newURL += words[i];
    }
    chrome.tabs.update({url: newURL});
});