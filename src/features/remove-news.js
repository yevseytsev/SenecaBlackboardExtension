// Checks if the URL is the Seneca BB Homepage (When NOT signed-in)
if (window.location.href == "https://my.senecacollege.ca/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_16_1") {
    // Removing "Seneca News" Section by getting the element ID
    element = document.getElementById("module:_3074_1");
    element.parentNode.removeChild(element);
}