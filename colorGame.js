	
	var sumNum = 6;
	var colors = generateRandomColors(sumNum);

	var colorDisplay = document.getElementById("display")
	var squares = document.querySelectorAll(".square");
	var message = document.getElementById("message");
	var pickedColor = pickColor();
	var h1 = document.querySelector("h1");
	var resetButton = document.querySelector("#reset");

	var easyBtn = document.querySelector("#easyBtn");
	var hardBtn = document.querySelector("#hardBtn");


	//easy mode
	easyBtn.addEventListener("click", function(){
		easyBtn.classList.add ("selected");
		hardBtn.classList.remove ("selected");
		sumNum = 3;
		colors = generateRandomColors(sumNum);
		pickedColor = pickColor();
		for(var i = 0; i < squares.length; i++){
			if(colors[i]){
			squares[i].style.background = colors[i];
			}else{
				squares[i].style.display = "none";
			}
	}
	});

	//hard mode
	hardBtn.addEventListener("click", function(){
		hardBtn.classList.add ("selected");
		easyBtn.classList.remove ("selected");
		sumNum = 6;
		colors = generateRandomColors(sumNum);
		pickedColor = pickColor();
		for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
	});


	resetButton.addEventListener("click", function(){
		//generate a random color
		colors = generateRandomColors(sumNum);
		//select a random color
		pickedColor = pickColor();
		for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
		//update the picked color
		colorDisplay.textContent = pickedColor;
		h1.style.background = "#232323";
	});

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
			resetButton.textContent = "Play Again?"
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
		//get random color and push into array
		
	//return that array
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make a array
	var arr = []
	//add num random colors to array
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
	}
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