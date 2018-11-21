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
1. [Fork the repo](https://help.github.com/articles/fork-a-repo/)
1. Clone the repo:
    ```sh
    git clone https://github.com/{your-github-username}/SenecaBlackboardExtension
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
