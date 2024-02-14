var images = ["OthelloGamePlay.png", "OthelloGamePlay.png", "OthelloGamePlay.png", "OthelloGamePlay.png",
            "OthelloGamePlay.png", "OthelloGamePlay.png", "OthelloGamePlay.png", "OthelloGamePlay.png",
            "OthelloGamePlay.png", "OthelloGamePlay.png", "OthelloGamePlay.png", "OthelloGamePlay.png"];
            
function setup() {
    var display = document.getElementById("main-display");

    images.forEach(element => {
        var image = document.createElement("img");
        var src = "images/" + element;
        image.src = src;
        image.onclick = function() {select(src);};
        display.appendChild(image);
    });

    // Check if there are input parameters
    var queryString = window.location.search;

    if (queryString != "") {
        queryString = queryString.substring(1);
        select(queryString);
    }
}

function select(value) {
    var display = document.getElementById("single-display");
    var image = document.getElementById("single-image");
    var share = document.getElementById("share");

    image.src = value;
    share.innerText = "https://admiralgama.github.io/art.html?" + value;
    display.style.display = "block";
}

setup();