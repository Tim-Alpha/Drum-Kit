
var lengthOfLoop = document.querySelectorAll(".drum").length;
for (var i = 0; i < lengthOfLoop; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var keys = this.innerText;
        playsound(keys);
        buttonAnimation(keys);
    });
}

function playsound(keys) {
    console.log(keys);
    switch (keys) {
        case 'w':
            var myaudio = new Audio('sounds/tom-1.mp3');
            myaudio.play();
            break;
        case 'a':
            var myaudio = new Audio('sounds/tom-2.mp3');
            myaudio.play();
        case 's':
            var myaudio = new Audio('sounds/tom-3.mp3');
            myaudio.play();
        case 'd':
            var myaudio = new Audio('sounds/tom-4.mp3');
            myaudio.play();
        case 'j':
            var myaudio = new Audio('sounds/snare.mp3');
            myaudio.play();
        case 'k':
            var myaudio = new Audio('sounds/crash.mp3');
            myaudio.play();
        case 'l':
            var myaudio = new Audio('sounds/kick-bass.mp3');
            myaudio.play()
    }
}

document.addEventListener("keypress", function (event) {
    var keyboardPress = event.key;
    playsound(keyboardPress);
    buttonAnimation(keyboardPress);
});

function buttonAnimation(currentKey) {
    var keyStock = document.querySelector("."+currentKey);
    keyStock.classList.add("pressed");
    setTimeout(function(){
        keyStock.classList.remove("pressed");
    },100)
}