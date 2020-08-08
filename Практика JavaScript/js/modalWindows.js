var modal = document.getElementById("my_modal");
var button = document.getElementById("btn_modal_window");
var close = document.getElementsByClassName("close_modal_window")[0];

//При клике на кнопку появиться модальное окно
button.onclick = function () {
    modal.style.display = "block";
}

//При клике на крестика в модальном окне, оно закроется
close.onclick = function () {
    modal.style.display = "none";
}

//При клике вокуг модального окна, оно так ж закроется
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
