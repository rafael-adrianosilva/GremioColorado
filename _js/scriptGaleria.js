// Seleciona todos os elementos de imagem dentro da galeria
const imagens = document.querySelectorAll('.caixaDoLanches img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

imagens.forEach(img => {
	img.addEventListener('click', function() {
		modal.style.display = 'block';
		modalImg.src = this.src;
	});
});

closeBtn.onclick = function() {
	modal.style.display = 'none';
}

// Fecha a modal ao clicar fora da imagem
window.onclick = function(event) {
	if (event.target === modal) {
		modal.style.display = 'none';
	}
}
