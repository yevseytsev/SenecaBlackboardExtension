if(window.location.href == "https://studenterp.senecacollege.ca/psp/ps/?cmd=login&languageCd=ENG&"){
    
    //get the id of the username input field and work our way back to the table its in
                                        //<input/>    <td>          <tr>          <tbody>
    var tbody = document.getElementById("userid").parentElement.parentElement.parentElement;
    var tr = document.createElement("tr");
    tr.innerHTML = `<td height="35">&nbsp;</td>
                    <td height="35">&nbsp;</td>
                    <td height="35">
                        <a href="https://myid.senecacollege.ca/passwordservice/"><input type="button" class="s3_button" value="Forgot Password" /></a>
                    </td>`;
    tbody.appendChild(tr);
}