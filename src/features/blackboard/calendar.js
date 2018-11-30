// Checks if the URL is the Seneca BB Homepage (When signed-in)
if (window.location.href == "https://my.senecacollege.ca/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_241_1" ||
    window.location.href == "https://my.senecacollege.ca/webapps/portal/execute/tabs/tabAction?tabId=_101627_1&tab_tab_group_id=_241_1") {
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