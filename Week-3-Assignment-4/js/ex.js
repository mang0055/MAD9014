// JavaScript Document
var status_text;
var enablePopup=false;
var howerMainDiv;
function load() {
    //console.log("load event detected!");
	status_text=document.querySelector(".short-rect");
	howerMainDiv=document.querySelector(".long-rect");
	howerMainDiv.onmouseover = function() {
    	//console.log("Mouse over");
    	enablePopup=true;
    	status_text.innerHTML="Mouse Over";
	}
	
	howerMainDiv.onmouseout = function() {
    	//console.log("Mouse is out");
    	status_text.innerHTML="Mouse is Outside";
	}
	
	status_text.addEventListener("click", function()
		{
			if(enablePopup){
				//console.log("Clicked");
				alert('Click!');
			}
			
		});
}
window.onload = load;