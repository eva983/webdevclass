
//changes css 
var x = document.querySelectorAll("p");
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.color = "#6D4F6D";
} 

//dom event when button is clicked
function Func1(){
	  document.getElementById("f1").submit();

	
}

var myVideo = document.getElementById("video1"); 

// dom event when button is clicked
function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

