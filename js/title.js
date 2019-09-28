if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 300);

}

var x = 0;

var titleText = ["L", "La", "Lan","Land","Landi","Landin","Landing","Landing P","Landing Pa","Landing Pag","Landing Page","Landing Page","Landing Pag","Landing Pa","Landing P","Landing","Landin","Landi","Land","Lan","La"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
