// Create variables to shorten JS commands to target HTML IDs.
var box = document.getElementById("box")
var ident = function(id) {return document.getElementById(id); };

ident("button1").onclick = function(){ //grow
    box.style.transform = "scale(1.3, 1.3)";
}

ident("button2").onclick = function(){ //blue
    box.style.backgroundColor = "blue";
}

ident("button3").onclick = function(){ //fade
    box.style.opacity = "0.5";
}

ident("button4").onclick = function(){ //reset 
    box.style.transform = "scale(1, 1)";
    box.style.backgroundColor = "orange";
    box.style.opacity = "1"
}

/* The above is strictly JavaScript to make the buttons work, however they only 
work once. I couldn't figure out how to incrament the values since style 
attributes are stored as strings in HTML/CSS.  */

/* The following section uses jQuery for more functionality. Un-comment it as well
as the jQuery <script> tag in the html file to use this. Remember to comment out 
the pure JavaScript code above.  */

/* $("#button1").on("click", function() {
    $("#box").animate({height:"+=35px", width:"+=35px"});
})

$("#button2").on("click", function(){
    $("#box").css("background-color", "blue")
})

$("#button3").on("click", function(){
    $("#box").css({opacity:"-=0.2"});
})

$("#button4").on("click", function(){
    $("#box").css("height", "150px");
    $("#box").css("width", "150px");
    $("#box").css("opacity", "1");
    $("#box").css("background-color", "orange");
}) */


// This makes a box with random size, opacity, and color. This became a mess. I only
// know how to do this cleanly in Python.
var colorArray = ["pink", "green", "blue", "red", "black", "purple", "yellow"]

ident("button5").onclick = function(){    
    var randColor = Math.floor((Math.random() * colorArray.length));
    var randOpacity = Math.random();
    var randSize = Math.random() * (3 - 0.5) + 0.5;
    var str = ("scale" + "(" + randSize.toString() + ", " + randSize.toString() + ")");
    
    box.style.transform = str;
    box.style.backgroundColor = colorArray[randColor];
    box.style.opacity = randOpacity.toString();
}