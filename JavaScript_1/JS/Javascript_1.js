function Hello_World_Function()
{
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

const myCanvas = document.getElementById('myCanvas');
const ctx = myCanvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(250, 50);
ctx.lineTo(250, 250);
ctx.lineTo(50, 250);
ctx.lineTo(50, 50);
ctx.stroke();

// Create a Gradiant
const grd = ctx.createLinearGradient(50, 50, 250, 250);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// draw a filled rectangle
ctx.fillStyle = grd;
ctx.fillRect(50, 50, 200, 200);