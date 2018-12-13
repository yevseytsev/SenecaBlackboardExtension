// Saves options to chrome.storage
function save_options() {
    var brightnessBox = document.getElementById('adj-brightness').checked;
    var calendarBox = document.getElementById('calendar').checked;
    var badgesBox = document.getElementById('badges').checked;
    var collegeServicesBox = document.getElementById('college-services').checked;
    var msToolsBox = document.getElementById('ms-tools').checked;
    var removeCourseSurveyBox = document.getElementById('remove-course-survey').checked;
    var removeDykBox = document.getElementById('remove-dyk').checked;
    var removeEmpDirBox = document.getElementById('remove-emp-dir').checked;
    var removeITSBox = document.getElementById('remove-its').checked;
    var removeMyOrgBox = document.getElementById('remove-my-org').checked;
    var removeMsSubjNoteBox = document.getElementById('remove-ms-subj-note').checked;
    var removeSenecaNewsBox = document.getElementById('remove-news').checked;
    var removeSpotlightBox = document.getElementById('remove-spotlight').checked;
    var removeWebMailBox = document.getElementById('remove-webmail').checked;
    var defaultBox = document.getElementById('theme-default').checked;
    var darkBox = document.getElementById('theme-dark').checked;
    var newBox = document.getElementById('theme-new').checked;
    var forgotPassBox = document.getElementById('forgot-pass').checked;
    var fontSizeBox = document.getElementById('fontSize').checked;
    
    chrome.storage.sync.set({
      brightness: brightnessBox,
      calendar: calendarBox,
      badges: badgesBox,
      collegeServices: collegeServicesBox,
      msTools: msToolsBox,
      removeCourseSurvey: removeCourseSurveyBox,
      removeDyk: removeDykBox,
      removeEmpDir: removeEmpDirBox,
      removeITS: removeITSBox,
      removeMyOrg: removeMyOrgBox,
      removeMsSubjNote: removeMsSubjNoteBox,
      removeNews: removeSenecaNewsBox,
      removeSpotlight: removeSpotlightBox,
      removeWebMail: removeWebMailBox,
      themeDefault: defaultBox,
      themeDark: darkBox,
      themeNew: newBox,
      forgotPass: forgotPassBox,
      fontSize: fontSizeBox
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 1000);
    });
  }
  
// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
// Use default value true
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
    fontSize
}, function(items) {
    document.getElementById('adj-brightness').checked = items.brightness;
    document.getElementById('calendar').checked = items.calendar;
    document.getElementById('badges').checked = items.badges;
    document.getElementById('college-services').checked = items.collegeServices;
    document.getElementById('ms-tools').checked = items.msTools;
    document.getElementById('remove-course-survey').checked = items.removeCourseSurvey;
    document.getElementById('remove-dyk').checked = items.removeDyk;
    document.getElementById('remove-emp-dir').checked = items.removeEmpDir;
    document.getElementById('remove-its').checked = items.removeITS;
    document.getElementById('remove-my-org').checked = items.removeMyOrg;
    document.getElementById('remove-ms-subj-note').checked = items.removeMsSubjNote;
    document.getElementById('remove-news').checked = items.removeNews;
    document.getElementById('remove-spotlight').checked = items.removeSpotlight;
    document.getElementById('remove-webmail').checked = items.removeWebMail;
    document.getElementById('theme-default').checked = items.themeDefault;
    document.getElementById('theme-dark').checked = items.themeDark;
    document.getElementById('theme-new').checked = items.themeNew;
    document.getElementById('forgot-pass').checked = items.forgotPass;
    document.getElementById('fontSize').checked = items.fontSize;
});
}
document.addEventListener('DOMContentLoaded', restore_options);
var element_id_save = document.getElementById('save');
if (element_id_save) {
  element_id_save.addEventListener('click', save_options);
}
