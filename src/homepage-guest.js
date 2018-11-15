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


/******** Checks if the URL is the Seneca BB Homepage (When SIGNED-IN) ********/
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

    cal += '<caption>' + "Calendar" + '</caption';
    cal = '<table border=1 cellspacing=0 cellpading=1 bordercolor=BBBBBB><caption style="padding:5px 0 3px 12px; font-weight: bolder; font-size: 1.1rem; background-color: #c2c2c2">' 
            + " Calendar " + '</caption<tr><td>';
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
    cal += '</td></tr></table></table>';

    document.getElementById("module:_4360_1").innerHTML = cal;
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
