
    //Welcoming function to the main page
    function welcome(){
                alert("Want to get in touch? ")
    };


// This Idear was taken from https://codepen.io/kevinskeldon/pen/IKCiH Code is the same as in code pen but adapted to suite my website

var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

var dots=[];
var numDots = 50; // this variable will determine howmany dont there are on the screen
var width = canvas.width;
var height = canvas.height;
var bounce = -1;
for(var i=0 ; i<numDots ; i++){
  dots.push({
    x : Math.random() * width,
    y : Math.random() * height,
    vx : Math.random() * 10-5,
    vy : Math.random() * 10-5,
  })
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    var j, dot;
    for(j = 0; j < numDots; j++) {
        dot = dots[j];
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 5.5, 0, Math.PI * 2, false); // setting the size of the dots 
         ctx.fillStyle = "#E3F1FE" // setting the colour of the dots
        ctx.fill();
        //ctx.stroke();
    }
}

function update(){
  var i,dot;
  for( i=0 ; i< numDots ; i++){
    dot = dots[i];
    dot.x += dot.vx;
    dot.y += dot.vy;
    
    if(dot.x >width){
      dot.x = width;
      dot.vx *= bounce;
    }else if(dot.x <0){
      dot.x = 0;
      dot.vx *= bounce;
    }
    
    if(dot.y > height){
      dot.y = height;
      dot.vy *= bounce;
    }else if(dot.y<0){
      dot.y = 0;
      dot.vy *= bounce;
    }
  }
}

setInterval(function() {
    update(); //calling update function
    draw(); //calling draw function
}, 1000/27); // the speed at which the dots travel on the canvas

// End reference 