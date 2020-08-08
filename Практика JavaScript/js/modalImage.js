var modalImage = document.getElementById('modalImage');
var modalWindow = document.getElementById('modalWindow');
var modalImageContent = document.getElementById("modalImageContent");
var captionModalImage = document.getElementById("captionModalImage");
var closeModalWindow = document.getElementsByClassName("close-modal-window")[0];

modalImage.onclick = function() {
	modalWindow.style.display = "block";
	modalImageContent.src = this.src;
	captionModalImage.innerHTML = this.alt;	/*Передача в описание alt img*/
}

closeModalWindow.onclick = function() {
	modalWindow.style.display = "none";
}