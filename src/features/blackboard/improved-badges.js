// Checks if the URL is the Seneca BB Homepage
if (window.location.href.indexOf("https://my.senecacollege.ca/webapps/") == 0) {
    var badgeElement = document.getElementById('badgeTotalCount');

    // If badgeTotalCount element exists ...
    if(badgeElement != null) {
        badgeElement.style.visibility = "hidden";
        
        // Simulate 2 click events
        // First to get the data that is not loaded yet
        // Second to close the dropdown menu
        var evObj = document.createEvent('Events');
        evObj.initEvent('click', true, false);
        badgeElement.dispatchEvent(evObj); 
        badgeElement.dispatchEvent(evObj); 

        // Since the data is not loaded quickly enough setTimeout() is needed
        // setTimeout() asynchroniously waits 1000 ms and runs the code inside it
        setTimeout(function() {
            var alertElement = document.getElementById('AlertsOnMyBb_____AlertsTool::badge');
            var gradeElement = document.getElementById('MyGradesOnMyBb_____MyGradesTool::badge');

            var alerts = 0;
            var grades = 0;
            
            // Check whether any grades or alerts exist
            if(alertElement != null){
                alerts = alertElement.innerText;
            }

            if(gradeElement != null){
                grades = gradeElement.innerText;
            }

            //console.log("Alerts = " + alerts);
            //console.log("Grades = " + grades); 
            
            // If there are any grades then replace the number on the red badge
            if(grades != 0){
                document.getElementById("badgeTotalCount").innerText = grades;
                document.getElementById('badgeTotalCount').style.visibility = "visible";
            }

            // If the are any alerts then add an element to display the count
            if(alerts != 0){
                document.getElementById("badgeTotalCount").parentNode.innerHTML += '<span id="badgeAlertsCount" title="" ' 
                    + 'style="background-color: teal;display: inline-block;font-size: 10px;font-weight: 800;height: 12px;/* width: 20px; */'
                    + 'background-color: teal;text-align: center;line-height: .9;color: #fff;margin-left: 5px;-webkit-border-radius: 2px 2px 2px 2px;'
                    + '-moz-border-radius: 2px 2px 2px 2px;border-radius: 2px 2px 2px 2px;-webkit-box-shadow: none;-moz-box-shadow: none;box-shadow: none;'
                    + ' padding: 3px 3px 0;">' + alerts + '</span>';
            }
        }, 1000);
    }
}