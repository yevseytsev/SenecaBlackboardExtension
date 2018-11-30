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
                <input name="button" class="button" type="button" id="txt-large" value="Make Text Bigger" />
                <input name="button" class="button" type="button" id="txt-small" value="Make Text Smaller" />
                <input name="button" class="button" type="button" id="txt-original" value="Original Text Size" />
            </div>
            <div>
                <input name="button" class="button" type="button" id="txt-style" value="Random Text Style" />
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

var txtstyleElement = document.getElementById('txt-style');
if (txtstyleElement) {
   txtstyleElement.addEventListener('click', () => {
       changeTextStyle();
   });
}