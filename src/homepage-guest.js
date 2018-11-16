// Check if this is seneca college website
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

// Checks if the URL is the Seneca BB Homepage (When NOT signed-in)
if (window.location.href == "https://my.senecacollege.ca/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_16_1") {
    // Changes the links in the "College Services" box
    // Can directly edit the HTML below to replace what's in the box
    document.getElementById("module:_3073_1").innerHTML =
        `<!-- extid:3073: --> 
    <div class="edit_controls">
    </div>     
     
    <h2 class="  clearfix">
        <span class="moduleTitle" >College Services</span>
    </h2>   
   
    <div class="collapsible" style="overflow: auto;">
        <div style="border-style: solid; border-color: #efefef; background-color: #ffffff; font-family: Arial,Helvetica,sans-serif; margin:0px 0px 0px 0px;">
            <!-- add a button to change the size and style of the font -->
            <div>
            <h3>Change the Font Size and Style</h3>
            <div>
                <input name="button" type="button" id="txt-large" value="Make Text Bigger" />
                <input name="button" type="button" id="txt-small" value="Make Text Smaller" />
                <input name="button" type="button" id="txt-original" value="Original Text Size" />
            </div>
            <div>
                <input name="button" type="button" id="txt-style" value="Random Text Style" />
            </div>
            <!-- heading -->
            <div style="margin: 5px 5px 5px 10px;">  
                <p></p>
            </div>

            <ul style="margin: 2px 2px 2px 25px;" id="text"> <!-- add "text" id -->
                <br />
                <!-- link -->
                <li style="color: #555555;">
                    <a href="https://myseneca.ca" target="_blank">MySeneca Email</a><br /><br />
                </li>
                <!-- link -->
                <li style="color: #555555;">
                    <a href="https://studenterp.senecacollege.ca/psp/ps/?cmd=login" target="_blank">Student Centre</a> <br /><br />
                </li>
                <!-- link -->
                <li style="color: #555555;">
                    <a href="https://inside.senecacollege.ca/its/support/myseneca/" target="_blank">My.Seneca Help</a> <br /><br />
                </li>
                <li style="color: #555555;">
                <a href="https://ict.senecacollege.ca/" target="_blank">Seneca ICT</a> <br /><br />
                </li>
                <li style="color: #555555;">
                 <a href="http://www.senecacollege.ca/international.html" target="_blank">Seneca International</a> <br /><br />
                </li>
                <!-- Start of Collapsible Seneca Services -->
                <details>
                    <summary style="color: red; font-size: 16px"> More Seneca Services </summary>
                    </br>
                    <ul>
                        <!-- link -->
                        <li style="color: #555555;">
                            <a href="http://www.senecacollege.ca/onecard/index.html" target="_blank">OneCard</a><br /><br />
                        </li>
                        <!-- link -->
                        <li style="color: #555555;">
                            <a href="https://inside.senecacollege.ca/its/" target="_blank">ITS Service Desk</a><br /><br />
                        </li>
                        <!-- link -->
                        <li style="color: #555555;">
                            <a href="http://www.senecacollege.ca/ce" target="_blank">Part-time Registration</a><br /><br />
                        </li>
                        <!-- link -->
                        <li style="color: #555555;">
                            <a href="https://inside.senecacollege.ca/its/contact/requestform.html" >Contact Us</a><br /><br />
                        </li>
                        <!-- link -->
                        <li style="color: #555555;">
                            <a href="http://library.senecacollege.ca/" target="_blank">Seneca Libraries</a><br /><br />
                        </li>
                        <!-- link -->
                        <li style="color: #555555;">
                            <a href="http://www.senecacollege.ca/mylearning" target="_blank">MyLearning / Lynda.com</a><br /><br />
                        </li>
                        <!-- link -->
                        <li style="color: #555555;">
                            <a href="http://www.senecacollege.ca/transportation/" target="_blank">Parking &amp; Transportation</a><br /><br />
                        </li>
                        <!-- link -->
                        <li style="color: #555555;">
                            <a href="http://www.senecacollege.ca/bookstore" target="_blank">BookStore</a><br /><br />
                        </li>
                        <!-- link -->
                        <li style="color: #555555;">
                            <a href="http://www.senecacollege.ca/ce/cdl/" target="_blank">Centre for Flexible Learning</a><br /><br />
                        </li>
                        <!-- link -->
                        <li style="color: #555555;">
                            <a href="https://apps.senecacollege.ca/pat/assessment/" target="_blank">Skills Assessment</a><br /><br />
                        </li>
                        <!-- link -->
                        <li style="color: #555555;">
                            <a href="http://www.senecacollege.ca/about/security" target="_blank">Security &amp; Emergency Procedures</a><br /><br />
                        </li>
                        <!-- link -->
                        <li style="color: #555555;">
                            <a href="http://www.senecacollege.ca/policies/" target="_blank">Policies</a><br /><br />
                        </li>

                    </ul>
                </details>
            </ul>
        </div>
       </br>
       </br>
       </br>
		<div>
		<h3>Switch to original version</h3>
               <a href="https://my.senecacollege.ca/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_16_1">
               <input name="button" type="button" id="bt"
               value="Switch Version" />
                </a>
		</div>
    </div>`;


}
// The following code will activiate regardless of whether the user is logged in or not

// Removing "Did You Know?" Section by getting the element ID
var element = document.getElementById("module:_4399_1");
element.parentNode.removeChild(element);

// Removing "Seneca Spotlight" Section by getting the element ID
element = document.getElementById("module:_3075_1");
element.parentNode.removeChild(element);

// Removing "Seneca News" Section by getting the element ID
element = document.getElementById("module:_3074_1");
element.parentNode.removeChild(element);

// function to resize the text
function resizeText(value) {
    var curSize = document.getElementById('text').style.fontSize;
    if (curSize != '') {
        curSize = curSize.slice(0, -2);
        curSize = parseInt(curSize) + value;
    } else {
        curSize = 16;
    }
    document.getElementById('text').style.fontSize = curSize + 'px';
}

// function to set the text size to the original size
function originalTextSize() {
    document.getElementById('text').style.fontSize = '14px';
}

// function to change the text style
function changeTextStyle() {
    var fontStyle = ['Arial','Helvetica','Times New Roman','Times','Courier New','Courier','Verdana','Georgia',
                    'Palatino','Garamond','Bookman','Comic Sans MS','Trebuchet MS','Arial Black','Impact']; 
                    
    document.getElementById('text').style.fontFamily = fontStyle[parseInt(Math.random()*fontStyle.length)];
}

// add event listner to the button that executes the function
document.getElementById('txt-large').addEventListener('click', () => {
    resizeText(2);
});

document.getElementById('txt-small').addEventListener('click', () => {
    resizeText(-2);
});

document.getElementById('txt-original').addEventListener('click', () => {
    originalTextSize();
});

document.getElementById('txt-style').addEventListener('click', () => {
    changeTextStyle();
});
