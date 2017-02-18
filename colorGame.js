	var colors = generateRandomColors(6);

	var colorDisplay = document.getElementById("display")
	var squares = document.querySelectorAll(".square");
	var message = document.getElementById("message");
	var pickedColor = pickColor();
	var h1 = document.querySelector("h1");
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	
	
	//add event listener to squares
	squares[i].addEventListener("click", function(){
		//grab color of clciked square
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			changeColors(clickedColor);
			message.textContent = "Correct"
			h1.style.background = clickedColor;
		} else{
			this.style.background = "#232323"
			message.textContent = "try again!"
		}

	});
}

function changeColors(color){
	for(var i=0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make a array
	var arr = []
	//add num random colors to array
	for(var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick red from 0 - 255
	 var r = Math.floor(Math.random() * 256);
	//pick green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick blue from 0 -255
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r +", " + g + ", " + b + ")";

}