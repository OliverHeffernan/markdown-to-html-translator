function preview() {
    document.getElementById("highlight").className = "preview";
    document.getElementById("htmlSide").style.display = "block";
    document.getElementById("codeSide").style.display = "none";
}

function viewCode() {
    document.getElementById("highlight").className = "viewCode";
    document.getElementById("htmlSide").style.display = "none";
    document.getElementById("codeSide").style.display = "block";
}