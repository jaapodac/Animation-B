// JavaScript Document

/* -----------+ Comment Block +-------------------
File:		AnimationB.js
Author:     J. Apodaca
Date:       Apr 20, 2014
Purpose:    This experiment is in making Animation with various parameters that go beyond 
            just using setInterval and setTimeout

            Also, we go beyond the square and use different non-parallelogram shapes.

Dependencies:  None
    Input:     None
    Output:    None

Example of Use: <script type="text/javascript" src="js/AnimationB.js"> </script>

Special Thanks to:
http://jtauber.github.io/articles/css-hexagon.html
and
http://javascript.info/tutorial/animation#the-basics-of-the-animation 

*/
var     colors = ["yellow", "green", "red", "blue", "purple"];  
          //['#f35d4f','#f36849','#c0d988','#6ddaf1','#f1e85b']; //other colors
var      coloredLines = []; //Caution. the syntax here is  = [] not blah[].

var snd = new Audio("sounds/tos-computer-working.mp3"); // buffers automatically when created
var shape = document.getElementById('hex');  
  var left = 0;
  
function randomIntInRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
} //End randomIntInRange         
         
function useMe(){

snd.play();
move(shape);

} // End useMe

function move(elem) {

  function frame() {
    left++;  // update parameters
    elem.style.left = left + 'px'; // show frame
    if (left == (window.innerWidth - 100))  // check finish condition
     // clearInterval(id);
     left = 0;

  } // End frame
/*
The trouble is that you're passing the code to setInterval as a string ("frame()"). This 
means that it's evaluated in the global scope. The variable frame() does not exist in the 
global scope, only in the scope where it's defined.

If you pass a function in, this means that the variable frame() is available (it's "closed in"):
--http://stackoverflow.com/questions/7013644/setinterval-doesnt-work
*/
  var id = setInterval(function() {frame();}, 10); // draw every 10ms
} // End Move


