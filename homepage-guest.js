// Checks if the URL is the Seneca BB Homepage (When NOT signed-in)
if (window.location.href == "https://my.senecacollege.ca/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_16_1")
{
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
                   <!-- heading -->
                           <div style="margin: 5px 5px 5px 10px;">  
                               <p></p>
                           </div>
                         
                         <ul style="margin: 2px 2px 2px 25px;">
                       <br />
                       <!-- link -->
                               <li style="color: #555555;">
                                   <a href="https://myseneca.ca" target="_blank"><b>MySeneca Email</b></a><br /><br /></li>
                       <!-- link -->
                               <li style="color: #555555;">
                                   <a href="https://studenterp.senecacollege.ca/psp/ps/?cmd=login" target="_blank"><b>Student Centre</b></a> <br /><br /></li>
                       <hr /> <br />
                       <!-- link -->
                               <li style="color: #555555;">
                                   <a href="http://www.senecacollege.ca/onecard/index.html" target="_blank">OneCard</a><br /><br /></li>
                       <!-- link -->
                               <li style="color: #555555;">
                                   <a href="https://inside.senecacollege.ca/its/" target="_blank">ITS Service Desk</a><br /><br /></li>
                       <!-- link -->
                               <li style="color: #555555;">
                                   <a href="http://www.senecacollege.ca/ce" target="_blank">Part-time Registration</a><br /><br /></li>
                       <!-- link -->
                               <li style="color: #555555;">
                                   <a href="https://inside.senecacollege.ca/its/contact/requestform.html" >Contact Us</a><br /><br /></li>
                       <!-- link -->
                               <li style="color: #555555;">
                                   <a href="http://library.senecacollege.ca/" target="_blank">Seneca Libraries</a><br /><br /></li>
                       <!-- link -->
                               <li style="color: #555555;">
                                   <a href="http://www.senecacollege.ca/mylearning" target="_blank">MyLearning / Lynda.com</a><br /><br /></li>
                       <!-- link -->
                               <li style="color: #555555;">
                                   <a href="http://www.senecacollege.ca/transportation/" target="_blank">Parking &amp; Transportation</a><br /><br /></li>
                       <!-- link -->
                               <li style="color: #555555;">
                                   <a href="http://www.senecacollege.ca/bookstore" target="_blank">BookStore</a><br /><br /></li>
                       <!-- link -->
                               <li style="color: #555555;">
                                   <a href="http://www.senecacollege.ca/ce/cdl/" target="_blank">Centre for Flexible Learning</a><br /><br /></li>
                       <!-- link -->
                               <li style="color: #555555;">
                                   <a href="https://apps.senecacollege.ca/pat/assessment/" target="_blank">Skills Assessment</a><br /><br /></li>
                       <!-- link -->
                               <li style="color: #555555;">
                                   <a href="http://www.senecacollege.ca/about/security" target="_blank">Security &amp; Emergency Procedures</a><br /><br /></li>
                       <!-- link -->
                               <li style="color: #555555;">
                                   <a href="http://www.senecacollege.ca/policies/" target="_blank">Policies</a><br /><br /></li>
                       </ul>
                        
           
               </div>
           
    </div>`;

    // Removing "Did You Know?" Section by getting the element ID
    var element = document.getElementById("module:_4399_1");
    element.parentNode.removeChild(element);

    var element = document.getElementById("module:_3075_1");
    element.parentNode.removeChild(element);
}
