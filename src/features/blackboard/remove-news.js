// Checks if the URL is the Seneca BB Homepage (When NOT signed-in)
if (window.location.href.indexOf("https://my.senecacollege.ca/webapps/") == 0) {
    // Removing "Seneca News" Section by getting the element ID
    element = document.getElementById("module:_3074_1");
    element.style.display = "none";
}