// Removing useless sections
var pendingRemoveSections = [
    "module:_4399_1",
    "module:_246_1",
    "module:_4386_1",
    "module:_3075_1",
    "module:_3074_1",
    "module:_4396_1",
    "module:_907_1",
    "module:_3925_1",
    "module:_4396_1",
    "module:_4388_1",
];

pendingRemoveSections.forEach(section => {
    const element = document.getElementById(section);
    if (element) {
        element.style.display = "none";
    }
});

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
            <i class="icon-envelope-alt icon-fixed-width icon-large" style="padding-right: 5px; color: #ce3229;"></i>&nbsp;<a href="http://myseneca.ca" target="_blank">E-mail</a><br>
            <i class="icon-comments-alt icon-fixed-width icon-large" style="padding-right: 5px; color: #ce3229;" ></i>&nbsp;<a href="`
            + emailLink +
            `" target="content">Questions/Comments</a>
            <br>
            <i class="icon-calendar     icon-fixed-width icon-large" style="padding-right: 5px; color: #ce3229;"></i>&nbsp;<a href="/webapps/bb-social-learning-bb_bb60/execute/mybb?cmd=display&amp;toolId=calendar-mybb_____calendar-tool" target="_self">My.Seneca&nbsp;Calendar</a><br>
            `;
        }
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
            <!--<h3>Change the Font Size and Style</h3>
            <div>
                <input name="button" class="button" type="button" id="txt-large" value="Make Text Bigger" />
                <input name="button" class="button" type="button" id="txt-small" value="Make Text Smaller" />
                <input name="button" class="button" type="button" id="txt-original" value="Original Text Size" />
            </div>
            <div>
                <input name="button" class="button" type="button" id="txt-style" value="Random Text Style" />
            </div>-->
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
                <li style="color: #555555;">
                    <a href="http://www.senecacollege.ca/registrar/dates/" target="_blank">Important Academic Dates</a> <br /><br />
                </li>
                <li style="color: #555555;">
                <a href="http://library.senecacollege.ca/" target="_blank">Seneca Libraries</a> <br /><br />
                </li>
                <li style="color: #555555;">
                 <a href="https://inside.senecacollege.ca/its/support/myseneca/faculty/course_management/introduction.html" target="_blank">Seneca Faculty and Staff</a> <br /><br />
                </li>

                <!-- Start of Collapsible Seneca Services -->
                <details>
                    <summary style="color: red; font-size: 18px"> More Seneca Services </summary>
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
               <a href="https://my.senecacollege.ca/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_16_1">
               <input name="button" class="button" type="button" id="bt"
               value="Switch to Original Version" />
                </a>
		</div>
    </div>`;
    document.getElementById("column0").appendChild(document.getElementById("module:_3073_1"));
}

// Checks if the URL is the Seneca BB Homepage (When signed-in)
if (window.location.href == "https://my.senecacollege.ca/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_241_1") {
    document.getElementById("module:_4360_1").innerHTML =
        `<!-- extid:_4360_1: -->`
        /****** CALENDAR ******/
    var each_day = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
    var each_month = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    var Calendar = new Date();

    var year = Calendar.getFullYear();   
    var month = Calendar.getMonth();    
    var today = Calendar.getDate();    
    var numday = Calendar.getDay();   

    var each_days = 7;    
    var each_months = 31;    
    var cal;    

    Calendar.setDate(1);    
    Calendar.setMonth(month);  

    var f_tr = '<tr>';
    var l_tr = '</tr>';
    var highlighted_day_1 = '<td width="300"><table cellspacing=0 border=1 bgcolor=FF466A bordercolor=CCCCCC"><tr><td width=200><b><center>';
    var highlighted_day_2 = '</center></td></tr></table></b>';
    var f_td = '<td width="300" ><center>';
    var l_td = '</center></td>';

    cal = '<details open>';
    cal += '<summary style="padding:5px 0 3px 12px; font-weight: bolder; font-size: 1.1rem; background-color: #c2c2c2">Calendar</summary>';
    cal += '<tr><td>';
    cal += '<table border=0 cellspacing=0 cellpading=2>' + f_tr;
    cal += '<td COLSPAN="' + each_days + '" bgcolor="#EFEFEF" ><center><b>';
    cal += '<div style="color: red;">' + each_month[month] + '   ' + year + '</b>' + l_td + l_tr + '</div>';
    cal += f_tr;

    for (index = 0; index < each_days; index++) {

        if (numday == index) {
            cal += f_td + '<b>' + each_day[index] + '</b>' + l_td;
        } else {
            cal += f_td + each_day[index] + l_td;
        }
    }

    cal += l_td + l_tr;
    cal += f_tr;

    for (index = 0; index < Calendar.getDay(); index++)
        cal += f_td + '  ' + l_td;

    for (index = 0; index < each_months; index++) {
        if (Calendar.getDate() > index) {
            week_day = Calendar.getDay();

            if (week_day == 0) 
                cal += f_tr;

            if (week_day != each_days) {
                var day = Calendar.getDate();

                if (today == Calendar.getDate())
                    cal += highlighted_day_1 + day + highlighted_day_2 + l_td;
                else
                    cal += f_td + day + l_td;
            }
            if (week_day == each_days)
                cal += l_tr;
        }
        Calendar.setDate(Calendar.getDate() + 1);
    }
    cal += '</td></tr></table></table></details>';

    document.getElementById("module:_4360_1").innerHTML = cal;


    
   /**** Collapsible for Announcements ****/
   var output; //to store the contents of announcements
   var announcementsObject = document.getElementById("module:_4036_1");
   
   var c = announcementsObject.childNodes;
   //these 4 numbers cannot be changed or it will break everything!
   var c = c[7].childNodes;
   var c = c[3].childNodes;
   var c = c[1].childNodes;
   var c = c[2].childNodes;
   
   var startOfNonStudentNews = 0;
   while (true){//ended by break
	   var count = 0;
	   if (c[0].className == 'annTitle'){
		   console.log("found element with annTitle class");
		   if (c[0].innerHTML != "Student News:" && c[0].innerHTML != "Full-Time Student News:"){
				console.log("good stuff begins now");
				var startOfNonStudentNews = 1;
				break;
		   }
	   }
	c[0].remove();
   }
   
   output = announcementsObject.innerHTML;
    `<!-- extid:_4036_1: -->`
    var tot; //store the overall
    tot = '<details open>';
    tot += '<summary style="padding:5px 0 3px 12px; font-weight: bolder; font-size: 1.1rem; background-color: #c2c2c2">Announcements</summary>';
    tot += output;
    tot += '</details>';

    document.getElementById("module:_4036_1").innerHTML = tot;


   /**** Collapsible for College Services ****/
   var output; //to store the contents of announcements
   output = document.getElementById("module:_3077_1").innerHTML;
    `<!-- extid:_3077_1: -->`
    var tot; //store the overall
    tot = '<details open>';
    tot += '<summary style="padding:5px 0 3px 12px; font-weight: bolder; font-size: 1.1rem; background-color: #c2c2c2">Services</summary>';
    tot += output;
    tot += '</details>';

    document.getElementById("module:_3077_1").innerHTML = tot;
}

// Styling
element = document.querySelectorAll("h2");
for (let i=0; i<element.length; i++) {
    element[i].style.backgroundColor = "#E6E6FA";
    element[i].style.border = "4px";
}

element = document.getElementsByClassName("portlet");
for (let i=0; i<element.length; i++) {
    element[i].style.border = "1px solid grey";
    element[i].style.borderRadius = "4px";
}

//Hide "Note: Only the courses that your instructors have activated..."
element = document.getElementById("box_border");
if (element) {
    element.style.display = "none";
}

var elements = document.getElementsByClassName("button");
for (let i=0; i<elements.length; i++) {
    elements[i].style.color = "#fff";
    elements[i].style.fontSize = "17px";
    elements[i].style.backgroundColor = "#337ab7";
    elements[i].style.border = "#2e6da4";
    elements[i].style.borderRadius = "4px";
    elements[i].style.width = "auto";
    elements[i].style.height = "auto";
    elements[i].style.padding = "5px";
    elements[i].style.fontWeight = "normal";
}

// add event listner to the button that executes the function
var txtlargeElement = document.getElementById('txt-large');
if (txtlargeElement) {
    txtlargeElement.addEventListener('click', () => {
        resizeText(2);
    });
}

var txtsmallElement = document.getElementById('txt-small');
if (txtsmallElement) {
    txtsmallElement.addEventListener('click', () => {
        resizeText(-2);
    });
}

var txtoriginalElement = document.getElementById('txt-original');
if (txtoriginalElement) {
    txtoriginalElement.addEventListener('click', () => {
        originalTextSize();
    });
}

//var txtstyleElement = document.getElementById('txt-style');
//if (txtstyleElement) {
 //   txtstyleElement.addEventListener('click', () => {
       // changeTextStyle();
  //  });
//}
