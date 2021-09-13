//In the space below each problem, write the code to answer. This page connects to index.html
// Dont forget to do the PR after you are done.
/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/
var todayDate = new Date();

var day = new Date().toLocaleString('en-us', {weekday:'long'})
var time = new Date().toLocaleTimeString();
console.log(day);
now = "Today is " + day + ".";
console.log(now);
currentTime = "Current time : " + time;
console.log(currentTime);

var todayIs = document.getElementById("answer1").innerHTML = now + "<br />" + currentTime;


//adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat



/* 2.--------

*/

var datestring1 = "0" + (todayDate.getMonth()+1) + "-" + todayDate.getDate() + "-" + todayDate.getFullYear();
console.log(datestring1);

var datestring2 = "0" + (todayDate.getMonth()+1) + "/" + todayDate.getDate() + "/" + todayDate.getFullYear();
console.log(datestring2);

var datestring3 = todayDate.getDate() + "/" + "0" + (todayDate.getMonth()+1) + "/" + todayDate.getFullYear();
console.log(datestring3);

var dateList = document.getElementById("answer2").innerHTML = datestring1 + "<br />" + datestring2 + "<br />" + datestring3;

// adapt from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date


/* 3.--------

*/
var code = document.getElementById("body").innerHTML;

function myFunction() {
    // = document.documentElement.innerHTML;
    document.getElementById("answer3").innerText = code;
}

console.log(code);

/* 4.--------

*/
//

$(document).ready(function() { 'use strict';
    console.log('main.js loaded');


    paper.install(window);
    paper.setup(document.getElementById('main-canvas'));

    var tool = new Tool();

    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';

    tool.onMouseDown = function(event) {
        var c = Shape.Circle(event.point, 20);
        c.fillColor = 'green';
    };

    paper.view.draw();

});

   
// adapt from Learning Javascript Ethan Brown Chapter 1
