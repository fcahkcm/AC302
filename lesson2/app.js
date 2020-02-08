var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");


ctx.strokeStyle="blue";
ctx.lineWidth=5;

ctx.moveTo(100,100);
ctx.lineTo(200,300);
ctx.lineTo(50,900);
ctx.lineTo(500,30);

ctx.stroke();

ctx.fillStyle="red";
ctx.fillRect(500,500,100,200);

ctx.strokeStyle="green";
ctx.strokeRect(400,400,300,400);

ctx.clearRect(525,550,50,50);






