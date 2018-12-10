if (window.location.href == "https://my.senecacollege.ca/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_241_1") {
    // Changes the links in the "College Services" box
    // Can directly edit the HTML below to replace what's in the box
    document.getElementById("module:_4396_1").innerHTML =
        `<!-- extid:3073: --> 
        <div class="paneTabs clearfix">
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
            </div>
        </br>
        </br>
        </br>
       </div>
    `;
    document.getElementById("column0").appendChild(document.getElementById("module:_4396_1"));
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
// document.getElementById('txt-large').addEventListener('click', () => {
//     resizeText(2);
// });

// document.getElementById('txt-small').addEventListener('click', () => {
//     resizeText(-2);
// });

// document.getElementById('txt-original').addEventListener('click', () => {
//     originalTextSize();
// });

// document.getElementById('txt-style').addEventListener('click', () => {
//     changeTextStyle();
// });

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

