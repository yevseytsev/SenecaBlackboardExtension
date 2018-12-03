// This is the script that is run on default when the extension is active.

// Called when the page is refreshed
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {
        // Fetch saved options data
        chrome.storage.sync.get({
            brightness: true,
            calendar: true,
            badges: true,
            collegeServices: true,
            msTools: true,
            removeCourseSurvey: true,
            removeDyk: true,
            removeEmpDir: true,
            removeITS: true,
            removeMyOrg: true,
            removeMsSubjNote: true,
            removeNews: true,
            removeSpotlight: true,
            removeWebMail: true,
            themeDefault: true,
            themeDark: false,
            themeNew: false,
            forgotPass: true,
            fontSize: true
            },
        // This will check each stored value for the options and execute the script
        // for each option if it was turned on
        function(items) {
            if(items.fontSize == true) {
                chrome.tabs.executeScript({
                    file: 'src/features/blackboard/fontSize.js'
                });
            }
            if (items.brightness == true) {
                chrome.tabs.executeScript({
                    file: 'src/features/blackboard/brightnessExtension/brightness.js'
                });
                chrome.tabs.insertCSS({
                    file: 'src/features/blackboard/brightnessExtension/cover.css'
                })
            }
            if (items.calendar == true) {
                chrome.tabs.executeScript({
                    file: 'src/features/blackboard/calendar.js'
                });
            }
            if (items.badges == true) {
                chrome.tabs.executeScript({
                    file: 'src/features/blackboard/improved-badges.js'
                });
            }
            if (items.collegeService == true) {
                chrome.tabs.executeScript({
                    file: 'src/features/blackboard/improved-college-services.js'
                });
            }
            if (items.msTools == true) {
                chrome.tabs.executeScript({
                    file: 'src/features/blackboard/improved-myseneca-tools.js'
                });
            }
            if (items.removeCourseSurvey == true) {
                chrome.tabs.executeScript({
                    file: 'src/features/blackboard/remove-course-assessment-survey.js'
                });
            }
            if (items.removeDyk == true) {
                chrome.tabs.executeScript({
                    file: 'src/features/blackboard/remove-dyk.js'
                });
            }
            if (items.removeEmpDir == true) {
                chrome.tabs.executeScript({
                    file: 'src/features/blackboard/remove-employee-directory.js'
                });
            }
            if (items.removeITS == true) {
                chrome.tabs.executeScript({
                    file: 'src/features/blackboard/remove-ITS-status.js'
                });
            }
            if (items.removeMyOrg == true) {
                chrome.tabs.executeScript({
                    file: 'src/features/blackboard/remove-my-organization-plus.js'
                });
            }
            if (items.removeMsSubjNote == true) {
                chrome.tabs.executeScript({
                    file: 'src/features/blackboard/remove-myseneca-subjects-note.js'
                });
            }
            if (items.removeQwickly == true) {
                chrome.tabs.executeScript({
                    file: 'src/features/blackboard/remove-qwickly.js'
                });
            }
            if (items.removeNews == true) {
                chrome.tabs.executeScript({
                    file: 'src/features/blackboard/remove-news.js'
                });
            }
            if (items.removeSpotlight == true) {
                chrome.tabs.executeScript({
                    file: 'src/features/blackboard/remove-spotlight.js'
                });
            }
            if (items.removeWebMail == true) {
                chrome.tabs.executeScript({
                    file: 'src/features/blackboard/remove-webmail.js'
                });
            }
            if (items.themeDark == true) {
                chrome.tabs.insertCSS({
                    file: 'src/cssThemes/dark-theme.css'
                });
            }
            if (items.themeNew == true) {
                chrome.tabs.insertCSS({
                    file: 'src/cssThemes/seneca-new-theme.css'
                });
            }
            if (items.forgotPass == true) {
                chrome.tabs.executeScript({
                    file: 'src/features/studentCentre/forgot-password.js'
                });
            }
        });
    }
});

// Styling
element = document.querySelectorAll("h2");
for (let i=0; i<element.length; i++) {
    element[i].style.backgroundColor = "#E6E6FA";
    element[i].style.border = "4px";
}

element = document.getElementsByClassName("portlet");
for (let i=0; i<element.length; i++) {
    element[i].style.border = "1px solid grey";
    element[i].style.borderRadius = "4px";
}

var elements = document.getElementsByClassName("button");
for (let i=0; i<elements.length; i++) {
    elements[i].style.color = "#fff";
    elements[i].style.fontSize = "17px";
    elements[i].style.backgroundColor = "#337ab7";
    elements[i].style.border = "#2e6da4";
    elements[i].style.borderRadius = "4px";
    elements[i].style.width = "auto";
    elements[i].style.height = "auto";
    elements[i].style.padding = "5px";
    elements[i].style.fontWeight = "normal";
}