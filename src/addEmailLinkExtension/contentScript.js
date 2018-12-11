var list=document.getElementsByClassName("collapsible")[3].getElementsByTagName("ul")[0];
var node2 =document.getElementsByClassName("collapsible")[3].getElementsByTagName("li")[1];



if(node2.outerText.valueOf().startsWith("BookStore"))
{

	var node=document.createElement("li");
	node.innerHTML="<li style='color: #555555;'><a href='https://myseneca.ca' target='_blank'>Email</a><br><br></li>";

	list.insertBefore(node, node2);

}

