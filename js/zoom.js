let tamanhoFonte = 16;

function aumentarZoom() {
  tamanhoFonte += 2;
  document.querySelectorAll('.texto-historia').forEach(el => {
    el.style.fontSize = tamanhoFonte + 'px';
  });
}

function diminuirZoom() {
  if (tamanhoFonte > 12) {
    tamanhoFonte -= 2;
    document.querySelectorAll('.texto-historia').forEach(el => {
      el.style.fontSize = tamanhoFonte + 'px';
    });
  }
}
