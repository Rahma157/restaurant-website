document.addEventListener("DOMContentLoaded", function () {

let popup = document.getElementById("popup");
let openBtn = document.getElementById("openPopup");
let closeBtn = document.getElementById("closePopup");

openBtn.addEventListener("click", function (e) {
    e.preventDefault();
    popup.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
});

window.addEventListener("click", function (e) {
    if (e.target == popup) {
        popup.style.display = "none";
    }
});

});