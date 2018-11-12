// Checks if the URL is the Seneca BB Homepage (When NOT signed-in)
if (window.location.href == "https://my.senecacollege.ca/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_16_1") {
    // Removing "Seneca Spotlight"
    var element = document.getElementById("module:_3075_1");
    element.parentNode.removeChild(element);
    console.log("if works!");
}
console.log("spotight executing!");