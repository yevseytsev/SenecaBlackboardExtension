// Checks if the URL is the Seneca BB Homepage (When NOT signed-in)
if (window.location.href == "https://my.senecacollege.ca/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_16_1")
{
    var buttonLogin = document.getElementById("entry-login"),
    parent = buttonLogin.parentElement,
    next = buttonLogin.nextSibling,
    button = document.createElement("button"),
    text = document.createTextNode("Go to MySeneca Email");

    button.appendChild(text);
    if (next) parent.insertBefore(button, next);
    else parent.appendChild(button);
}