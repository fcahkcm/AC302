// $(document).ready(function() { 
// 	var response=prompt("hello world");
// 	if (response=="no"){
// 		$("body").html("");
// 	}
// });


// window.onload=function(){

// 	var response=prompt("hello world");
// 	if (response=="no"){
// 		$("body").html("");
// 	}
// };
console.log("hi");

$(document).ready(function(){
	$("#light").click(function(){
		console.log("light!!!");
		$("body").css("background-color","aqua");
		$("h1,div, span").css("color","black");
	});

	$("#dark").click(function(){
		$("body").css("background-color","black");
		$("h1,div, span").css("color","white");
	});
});






