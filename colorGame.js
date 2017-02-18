	var colors = [
		"rgb(255, 0, 0)",
		"rgb(255, 255, 0)",
		"rgb(0, 255, 0)",
		"rgb(0, 255, 255)",
		"rgb(0, 0, 255)",
		"rgb(255, 0, 255)"
	];
	//select elements
	var colorDisplay = document.getElementById("display")
	var squares = document.querySelectorAll(".square");

	var pickedColor = colors[3];
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	
	
	//add event listener to squares
	squares[i].addEventListener("click", function(){
		//grab color of clciked square
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			alert("correct");
		} else{
			alert("Wrong!");
		}

	});
}
