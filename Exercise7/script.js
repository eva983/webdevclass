
function mymessage() {
  alert("Hello!");
}

function logo(img){
var d=new Date();
var today=d.getDate();
var src;
if (today<3){
	src="at11.jpg";
}
else {
	src="at1.jpg";
}
img.src=src;
}

var x = document.querySelectorAll("h4");
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.color = "red";
} 

var y = document.querySelectorAll("p");

y[0].style.fontFamily = "Verdana";
 
 
/*dom event 1??*/
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
} 





