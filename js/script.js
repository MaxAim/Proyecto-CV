const titles = ["Coder", "Programmer", "Designer", "Developer"]
const fonts = ["'Orbitron', sans-serif", "'VT323', monospace", "'Caveat', cursive", "'Cormorant', serif" ]
const element = document.getElementById("changingText");
var writing = false;
var count = 1;
var letter = 0;
var x = setInterval(typer, 150)

function typer() {
    if(count == titles.length) count = 0;
    if(writing) {
        if(element.innerHTML.length < titles[count].length){
            element.innerHTML = titles[count].slice(0, letter + 1)
            letter++;
        }
        else{
            writing = false;
            timer = 1000;
            count++;
            letter = 0;
            clearInterval(x);
            setTimeout(() => x = setInterval(typer, 100), 1500)
        }
    }
    else{
        if(element.innerHTML){
            element.innerHTML = element.innerHTML.slice(0,-1);
        }
        else{
            writing = true;
            clearInterval(x);
            x = setInterval(typer, 200);
            element.style.fontFamily = fonts[count]
        }
    }
}