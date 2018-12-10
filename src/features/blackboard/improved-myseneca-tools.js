// Checks if the URL is the Seneca BB Homepage
if(window.location.href.indexOf("https://my.senecacollege.ca/webapps/") == 0) {
    var toolsElement = document.getElementById('module:_2611_1');
    
    // Check if tools element exists on current page
    if(toolsElement != null){
        var listElement = toolsElement.getElementsByClassName('collapsible');

        if(listElement != null){
            var emailLink = listElement[0].children[0].children[4];
            listElement[0].children[0].innerHTML = 
            `
            <i class="icon-envelope-alt icon-fixed-width icon-large" style="padding-right: 5px; color: #ce3229;"></i>&nbsp;
            <a href="http://myseneca.ca" target="_blank">E-mail</a>
            <br>

            <i class="icon-book icon-fixed-width icon-large" style="padding-right: 5px; color: #ce3229;"></i>&nbsp;
            <a href="https://sw.senecacollege.ca/home.htm" target="_blank">Seneca Works</a>
            <br>

            <i class="icon-truck icon-fixed-width icon-large" style="padding-right: 5px; color: #ce3229;"></i>&nbsp;
            <a href="http://www.senecacollege.ca/transportation/campusbuses.html" target="_blank">Campus Shuttle</a>
            <br>

            <i class="icon-comments-alt icon-fixed-width icon-large" style="padding-right: 5px; color: #ce3229;" ></i>&nbsp;
            <a href="` + emailLink + `" target="content">Questions/Comments</a>
            <br>

            <i class="icon-twitter icon-fixed-width icon-large" style="padding-right: 5px; color: #ce3229;" > </i>&nbsp;
            <a href="https://twitter.com/senecacollege" target="_blank">Seneca Twitter</a>
            <br>

            <i class="icon-calendar icon-fixed-width icon-large" style="padding-right: 5px; color: #ce3229;"></i>&nbsp;
            <a href="/webapps/bb-social-learning-bb_bb60/execute/mybb?cmd=display&amp;toolId=calendar-mybb_____calendar-tool" target="_self">My.Seneca&nbsp;Calendar</a>
            <br>
            `;
        }
    }
}