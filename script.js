
document.getElementById("abrir").onclick = function() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("catalogo").style.display = "block";
};

document.getElementById("volver").onclick = function() {
    document.getElementById("catalogo").style.display = "none";
    document.getElementById("inicio").style.display = "block";
};

document.getElementById("año").textContent = new Date().getFullYear();
