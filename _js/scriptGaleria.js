const imagens = document.querySelectorAll('.caixaDoLanches img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

// abre o modal com a imagem ampliada ao clicar nela
imagens.forEach(img => {
	img.addEventListener('click', function() {
		modal.style.display = 'block';
		modalImg.src = this.src; // Define a imagem clicada no modal
	});
});

// Fecha o modal
closeBtn.onclick = function() {
	modal.style.display = 'none'; // Esconde o modal
}

// Fecha o modal se clicar fora
window.onclick = function(event) {
	if (event.target === modal) {
		modal.style.display = 'none'; // Esconde o modal
	}
}
