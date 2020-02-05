var p1 = document.getElementById("p1");
var p2 = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var reset = document.querySelector("#reset");
var playingScore = document.querySelector("#playingScore");
var numInput  = document.querySelector("input[type='number']");
var p1Score = 0;
var p2Score = 0;
var isWin = false;
var limit = 5;

//reset 
function resetScore(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	isWin = false;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}

p1.addEventListener("click", function(){
	if(!isWin) {
		p1Score++;
		if(limit === p1Score){
			isWin = true;
			p1Display.classList.add("winner");
		}
		p1Display.textContent = p1Score;
	}
	
});
p2.addEventListener("click",function(){
	if(!isWin){
		p2Score++;
		if(limit===p2Score){
			isWin = true;
			p2Display.classList.add("winner");
		}
		p2Display.textContent = p2Score;
	}
});

reset.addEventListener("click",function(){
	resetScore();
});

numInput.addEventListener("change", function(){
	playingScore.textContent = this.value;
	limit = Number(this.value);
	resetScore();
});
