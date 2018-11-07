# SenecaBlackboardExtension

This project is a Google Chrome Extension for the [Seneca Blackboard website](https://my.senecacollege.ca/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_16_1) to improve the UX/UI for better usability. We focus on working with a diverse range of issues with the Seneca website.

Following features will be removed from the website:

- [ ] Seneca News
- [ ] Seneca Spotlight
- [X] Did You Know?
- [ ] Quickly
- [ ] Useless announcements (Full-Time Student News, Student News)

Following features will be added to the website:

- [ ] Organize modules that left after removing useless parts
- [ ] New module dedicated to important dates
- [ ] Announcements should show date, either as year, month, and day, or X days ago
- [ ] Split up announcements and marks notifications in the top right corner on the main page
- [ ] Button to switch to original version of Blackboard
- [ ] Add the email link to the login page
- [ ] Add the MySeneca.Help link to the my.senecacollege.ca sign in page
- [ ] Add Reset/Forgot password on this sign in page

You can add your suggestion by created a new issue on the repository or by joining out [Slack Channel](https://join.slack.com/t/seneca-web-extension/shared_invite/enQtNDczNTEwMzE5NzgzLTA1NTk0YzIxMzM4YTcwYTQ5ZDNjMjZiMDRhMGUxZGIyODQ3OWVjZGIwZWJkNGFmYTk0ZGMzNDE2NTRlMmM2ZTM).


# How to contribute?

We would happy to accept your impovements to Seneca BlackBoard extension for Google Chrome! 
Here are the [open issues](https://github.com/yevseytsev/SenecaBlackboardExtension/issues)

## Intro
- To improv this extension you will need to know [npm](https://docs.npmjs.com/getting-started/) and [webpack](https://web-design-weekly.com/2014/09/24/diving-webpack/)
- [JSX](https://reactjs.org/docs/introducing-jsx.html) is used to create DOM elements.
- All the [latest DOM APIs](https://github.com/WebReflection/dom4#features) and JavaScript features are available because the extension only has to work in the latest Chrome and Firefox. 🎉
- Each JavaScript feature lives in its own file under [`source/features`](https://github.com/sindresorhus/refined-github/tree/master/source/features) and it's loaded on condition in [`source/content.js`](https://github.com/sindresorhus/refined-github/blob/master/source/content.js).
- Some GitHub pages are loaded via AJAX/PJAX, so some features need to be in the special `ajaxedPagesHandler` function (see it as a custom "on DOM ready").
- See what a _feature_ [looks like](https://github.com/sindresorhus/refined-github/blob/master/source/features/add-time-machine-links-to-comments.js) and [how it's loaded](https://github.com/sindresorhus/refined-github/blob/d7768508c3919558daa6b2ccc5a15aa73d081551/source/content.js#L176) (in this case it uses `observeEl` to automatically be run when new comments are loaded via AJAX)
- If you're making changes to the README, try to match the style of the content that's already there and when in doubt, take a look at [our little style guide](https://github.com/sindresorhus/refined-github/issues/1139).

## Workflow

First clone:

```sh
git clone https://github.com/sindresorhus/refined-github
cd refined-github
npm install
```

When working on the extension or checking out branches, use this to have it constantly build your changes:

```sh
npm run watch # Listen for file changes and automatically rebuild
```

Then load or reload it into the browser to see the changes (this does not happen automatically).

## Loading extension to Google Chrome for testing
After building, the extension can be loaded to Google Chrome
<ol>
<li>Open <code>chrome://extensions</code>;
<li>Check the <strong>Developer mode</strong> checkbox;
<li>Click on the <strong>Load unpacked extension</strong> button;
<li>Select the folder <code>refined-github/distribution</code>.
</ol>
