# SenecaBlackboard Extension

This repository is a Google Chrome Extension for the [Seneca Blackboard website](https://my.senecacollege.ca/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_16_1) to improve the UX/UI for better usability. We focus on working with a diverse range of issues with the Seneca Blackboard website.

Feel free to add new issues, work on them and submit your pull requests for review!

You can disscuss your suggestions by joining out our [Slack Channel](https://join.slack.com/t/seneca-web-extension/shared_invite/enQtNDczNTEwMzE5NzgzLTA1NTk0YzIxMzM4YTcwYTQ5ZDNjMjZiMDRhMGUxZGIyODQ3OWVjZGIwZWJkNGFmYTk0ZGMzNDE2NTRlMmM2ZTM).


# What we want to do?

Following useless information will be removed from the Seneca Blackboard :
- [ ] Seneca News
- [ ] Seneca Spotlight
- [X] Did You Know?
- [ ] Quickly
- [ ] Useless announcements (Full-Time Student News, Student News)

Following features will be added to the Seneca Blackboard :
- [ ] Organize modules that left after removing useless parts
- [ ] New module dedicated to important dates
- [ ] Announcements should show date, either as year, month, and day, or X days ago
- [ ] Split up announcements and marks notifications in the top right corner on the main page
- [ ] Button to switch to original version of Blackboard
- [ ] Add the email link to the login page
- [ ] Add the MySeneca.Help link to the my.senecacollege.ca sign in page
- [ ] Add Reset/Forgot password on this sign in page


# How to contribute?

FOR THIS REPOSITORY IT IS MANDATORY TO CREATE ISSUE OR COMMENT UNDER EXISTING ISSUE BEFORE CREATING THE PULL REQUEST.
Here are the [open issues](https://github.com/yevseytsev/SenecaBlackboardExtension/issues).
We would be happy to accept your impovements to Seneca BlackBoard extension for Google Chrome! 

## Intro
- To improve this extension you will need to know [npm](https://docs.npmjs.com/getting-started/), [webpack](https://web-design-weekly.com/2014/09/24/diving-webpack/), [JSX](https://reactjs.org/docs/introducing-jsx.html) (is used to create DOM elements).
- Each JavaScript file lives in its own file under SRC folder
- Each image file lives in the IMAGES folder
- Each testing file lives in the TEST folder

## Workflow

1. Create issue or comment under existing issue, and make sure nobody else works on this issue
1. Clone the repo:
    ```sh
    git clone https://github.com/yevseytsev/SenecaBlackboardExtension
    cd SenecaBlackboardExtension
    npm install
    ```
1. Create a branch corresponding to your issue
1. Add your files/code to this branch
1. Build your code
1. Test your code in Google Chrome
1. After successful testing create the pull request of your branch with description what was changed/removed/added

## Loading extension to Google Chrome for testing
After building, the extension can be loaded to Google Chrome
<ol>
<li>Open <code>chrome://extensions</code>
<li>Check the <strong>Developer mode</strong> checkbox
<li>Click on the <strong>Load Unpacked Extension</strong> button
<li>Select the folder <code>SenecaBlackboardExtension/</code>
</ol>
