// Checks if the URL is the Seneca BB Homepage (When NOT signed-in)
if (window.location.href == "https://my.senecacollege.ca/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_16_1") {
    // Removing "Did You Know?" Section by getting the element ID
    var element = document.getElementById("module:_4399_1");
    element.parentNode.removeChild(element);
}