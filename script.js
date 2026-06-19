let text =
"Hey Prithaaaaa ❤️";

let i = 0;

function typeWriter(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,100);
    }
}

typeWriter();

function yesClicked() {
    window.location.href = "index2.html";
}

function goToPage2() {
document.getElementById("page1").style.display = "none";
document.getElementById("page2").style.display = "block";
}

function playMusic() {
document.getElementById("bgmusic").play();
}
