// =========================
// WishNest Script v5.1
// =========================



// 🚀 Start Button

const startBtn = document.getElementById("startBtn");


if (startBtn) {

    startBtn.addEventListener("click", () => {

        alert("🎉 Welcome to WishNest!\n\nEnjoy Birthday Wishes, Funny Wishes, Games & Entertainment ❤️");

    });

}




// 📋 Copy Wish Function

function copyWish(button){

    let wishText = button.parentElement.querySelector("p").innerText;


    navigator.clipboard.writeText(wishText);


    button.innerHTML = "✅ Copied!";


    setTimeout(()=>{

        button.innerHTML = "📋 Copy";

    },2000);

}





// 🎯 Guess Number Game

function guessGame(){

    let randomNumber = Math.floor(Math.random()*10)+1;

    let userNumber = document.getElementById("guessInput").value;

    let result = document.getElementById("guessResult");


    if(userNumber == randomNumber){

        result.innerHTML = "🎉 Correct! You Win ❤️";

    }

    else{

        result.innerHTML = "😅 Wrong! Number was " + randomNumber;

    }

}





// 🖱️ Click Challenge Game

let clicks = 0;
let gameStarted = false;


function clickGame(){

    if(!gameStarted){

        clicks = 0;
        gameStarted = true;


        document.getElementById("score").innerHTML = 0;


        let timer = 10;


        let interval = setInterval(()=>{

            timer--;


            if(timer <= 0){

                clearInterval(interval);


                document.getElementById("clickResult").innerHTML =
                "🎉 Your Score: " + clicks;


                gameStarted = false;

            }


        },1000);

    }


    clicks++;

    document.getElementById("score").innerHTML = clicks;

}






// ✂️ Rock Paper Scissors

function rps(player){

    let choices = [
        "Rock",
        "Paper",
        "Scissors"
    ];


    let computer =
    choices[Math.floor(Math.random()*3)];


    let result = document.getElementById("rpsResult");


    if(player === computer){

        result.innerHTML =
        "😐 Draw! Computer chose " + computer;

    }


    else if(

        (player==="Rock" && computer==="Scissors") ||
        (player==="Paper" && computer==="Rock") ||
        (player==="Scissors" && computer==="Paper")

    ){

        result.innerHTML =
        "🎉 You Win! Computer chose " + computer;

    }


    else{

        result.innerHTML =
        "😂 You Lose! Computer chose " + computer;

    }

}





// 🎆 Fireworks Effect

const fireworks = document.getElementById("fireworks");


document.addEventListener("click", function(e){


    if(!fireworks) return;


    let boom = document.createElement("div");


    boom.className = "firework";


    boom.style.left = e.clientX + "px";
    boom.style.top = e.clientY + "px";


    fireworks.appendChild(boom);


    setTimeout(()=>{

        boom.remove();

    },1000);


});





// Console Message

console.log("🚀 WishNest v5.1 Loaded Successfully!");
// ==========================================
// STRICT AUDIO TOGGLE LOGIC (FIXED)
// ==========================================
const music = document.getElementById('weddingMusic');
const soundBtn = document.getElementById('soundBtn');

// 1. Initial Auto-Play Attempt
function tryPlayAudio() {
    if (music && music.paused) {
        music.play().then(() => {
            if (soundBtn) soundBtn.innerText = "🔊";
        }).catch(err => {
            console.log("Autoplay waiting for click:", err);
        });
    }
}

// 2. Load and First Click Interaction
window.addEventListener('load', tryPlayAudio);

function startOnFirstClick() {
    tryPlayAudio();
    document.removeEventListener('click', startOnFirstClick);
    document.removeEventListener('touchstart', startOnFirstClick);
}
document.addEventListener('click', startOnFirstClick);
document.addEventListener('touchstart', startOnFirstClick);

// 3. Strict On/Off Button Control
if (soundBtn) {
    soundBtn.addEventListener('click', function (e) {
        // Event ko baki Jagah phailne se roko
        e.stopPropagation();
        e.stopImmediatePropagation();

        if (!music) return;

        // Check exact playing status
        if (!music.paused) {
            music.pause();
            soundBtn.innerText = "🔇";
            console.log("Music OFF");
        } else {
            music.play();
            soundBtn.innerText = "🔊";
            console.log("Music ON");
        }
    });
}