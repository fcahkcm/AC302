var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");


var img = new Image();
img.src="Terriermon.jpg";
img.id="img1";

var img2= new Image();
img2.src="pikachu.jpeg";
img2.id="img2";

var img3=new Image();
img3.src="backgroundImage.jpeg";
img3.id="img3";


img.onload=function(){
	ctx.drawImage(img,300,200,500,400);
};

img2.onload=function(){
	ctx.drawImage(img2,400,600,400,400);
};

// img3.onload=function(){
// 	ctx.drawImage(img3,0,0,1000,1000);
// };


ctx.font="30px Impact";
ctx.fillStyle="blue";
ctx.fillText("Hello world",100,50);


ctx.font="50px Impact";
ctx.strokeStyle="red";
ctx.strokeText("HIHIHIHI",100,100);


