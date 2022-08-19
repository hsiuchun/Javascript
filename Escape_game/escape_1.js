function start() {
    window.location.href = "./first_wall.html";
}

function nextwall(wall) {
    if (wall == 1) window.location.href = "./first_wall.html";
    if (wall == 2) window.location.href = "./second_wall.html";
    if (wall == 3) window.location.href = "./third_wall.html";
    if (wall == 4) window.location.href = "./forth_wall.html";
}

function prewall(wall) {
    if (wall == 1) window.location.href = "./first_wall.html";
    if (wall == 2) window.location.href = "./second_wall.html";
    if (wall == 3) window.location.href = "./third_wall.html";
    if (wall == 4) window.location.href = "./forth_wall.html";
}

function details(string) {
    console.log(string)
    if (string == 'vase') {
        var popUp = document.getElementById("vase_key");
        popUp.style.visibility = "visible";
    } else if (string == 'bed') {
        var popUp = document.getElementById("bed_paper");
        popUp.style.visibility = "visible";
    } else if (string == 'drawer1') {
        var popUp = document.getElementById("drawer1");
        popUp.style.visibility = "visible";
    } else if (string == 'drawer2') {
        var popUp = document.getElementById("drawer2");
        popUp.style.visibility = "visible";
    } else if (string == 'drawer3') {
        var popUp = document.getElementById("drawer3");
        popUp.style.visibility = "visible";
    } else if (string == 'drawer4') {
        var popUp = document.getElementById("drawer4");
        popUp.style.visibility = "visible";
    }
}

function hidePopup() {
    var popUp = document.getElementsByClassName("popupcontent");
    console.log(popUp)
    for (let i = 0; i < popUp.length; i++) {
        console.log(popUp[i]);
        popUp[i].style.visibility = "hidden";
    }

}

function takeout(string) {
    if (string == 'diamond') {
        var popUp = document.getElementById("diamond");
        popUp.setAttribute('src', 'images/empty.png');
    }
}