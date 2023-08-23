var timer = 60;
var score = 0;
var hitrn = 0;

function makeBubble(){
var clutter = "";

for(var i = 1; i<=216; i++) {
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbottom").innerHTML = clutter;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitvalue").textContent = hitrn;
}
function runTimer(){
    var timerint = setInterval(function(){
        if(timer > 0) {
        timer--;
        document.querySelector("#timervalue").textContent = timer;
        } else{
            clearInterval(timerint);
            document.querySelector("#pbottom").innerHTML = `Game Over`;
        }
    }, 1000);
}
   
function increaseScore(){
    score += 10;
    document.querySelector("#scorevalue").textContent = score;
}

document.querySelector("#pbottom")
.addEventListener("click", function(details){
    var clickednum = (Number(details.target.textContent));
    if(clickednum === hitrn) {
     increaseScore();   
     makeBubble();
     getNewHit();
    }
});

  
runTimer();
makeBubble();
getNewHit();
