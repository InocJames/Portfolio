var sidemenu = document.getElementById("sidemenu");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", function() {
    sidemenu.style.right = "0";
});

closeBtn.addEventListener("click", function() {
    sidemenu.style.right = "-150px";
});