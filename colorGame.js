var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 0, 0)",
	"rgb(255, 0, 0)",
	"rgb(255, 0, 0)",
	"rgb(255, 0, 0)",
	"rgb(255, 0, 0)"
	];

var squares = document.querySelectorAll(".square");

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];

}
