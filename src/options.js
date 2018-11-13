// Saves options to chrome.storage
function save_options() {
    var collegeServicesBox = document.getElementById('college-services').checked;
    var removeDykBox = document.getElementById('remove-dyk').checked;
    var removeSpotlightBox = document.getElementById('remove-spotlight').checked;
    var removeSenecaNewsBox = document.getElementById('remove-news').checked;
    chrome.storage.sync.set({
      collegeServices: collegeServicesBox,
      removeDyk: removeDykBox,
      removeSpotlight: removeSpotlightBox,
      removeNews: removeSenecaNewsBox
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
    collegeServices: true,
    removeDyk: true,
    removeSpotlight: true,
    removeNews: true
}, function(items) {
    document.getElementById('college-services').checked = items.collegeServices;
    document.getElementById('remove-dyk').checked = items.removeDyk;
    document.getElementById('remove-spotlight').checked = items.removeSpotlight;
    document.getElementById('remove-news').checked = items.removeNews;
});
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);