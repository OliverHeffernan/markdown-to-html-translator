function preview() {
    document.querySelector("#viewMode #highlight").className = "left";
    document.getElementById("htmlSide").style.display = "block";
    document.getElementById("codeSide").style.display = "none";
}

function viewCode() {
    document.querySelector("#viewMode #highlight").className = "right";
    document.getElementById("htmlSide").style.display = "none";
    document.getElementById("codeSide").style.display = "block";
}

if (window.innerWidth < window.innerHeight) {
    horizontal();
}


function horizontal() {
    document.querySelector("#orMode #highlight").className = "right";
    document.getElementById("sides").className = "horizontal";
}

function vertical() {
    document.querySelector("#orMode #highlight").className = "left";
    document.getElementById("sides").className = "vertical";
}