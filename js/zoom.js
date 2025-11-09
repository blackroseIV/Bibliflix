// ===============================
// 🔍 CONTROLE DE ZOOM DO TEXTO
// ===============================

function ajustarZoom(modalId, delta) {
  const modal = document.getElementById(`modal${modalId.replace(/\s+/g, '')}`);
  if (!modal) return console.error("Modal não encontrado:", modalId);

  const texto = modal.querySelector('.texto-historia');
  if (!texto) return console.warn("Nenhum texto encontrado em:", modalId);

  // Lê o tamanho atual da fonte
  let tamanhoAtual = parseFloat(window.getComputedStyle(texto).fontSize);
  let novoTamanho = tamanhoAtual + delta;

  // Define limites de tamanho
  if (novoTamanho < 12) novoTamanho = 12;
  if (novoTamanho > 28) novoTamanho = 28;

  // Aplica suavemente a transição
  texto.style.transition = 'font-size 0.2s ease';
  texto.style.fontSize = `${novoTamanho}px`;
}

// Funções chamadas pelos botões
function aumentarZoom(modalId) {
  ajustarZoom(modalId, 2);
}

function diminuirZoom(modalId) {
  ajustarZoom(modalId, -2);
}
