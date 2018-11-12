// This is the script that is run on default when the extension is active.

// Called when the page is refreshed
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {
        // Fetch saved options data
        chrome.storage.sync.get({
            collegeServices: true,
            removeDyk: true,
            removeSpotlight: true
            },
        // This will check each stored value for the options and execute the script
        // for each option if it was turned on
        function(items) {
            if (items.collegeServices == true) {
                chrome.tabs.executeScript({
                    file: 'src/features/change-college-services.js'
                });
            }
            if (items.removeDyk == true) {
                chrome.tabs.executeScript({
                    file: 'src/features/remove-dyk.js'
                });
            }
            if (items.removeSpotlight == true) {
                chrome.tabs.executeScript({
                    file: 'src/features/remove-spotlight.js'
                });
            }
        });
    }
});