// Checks if the URL is the Seneca BB Homepage (When NOT signed-in)
if (window.location.href.indexOf("https://my.senecacollege.ca/webapps/") == 0) {
    // Removing "Seneca Spotlight"
    var element = document.getElementById("module:_3075_1");
    element.style.display = "none";
}