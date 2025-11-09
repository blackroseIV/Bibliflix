// ===============================
// 🔍 CONTROLE DE ZOOM (somente TEXTO da aba ativa)
// ===============================

function ajustarZoom(modalId, delta) {
  const modal = document.getElementById(`modal${modalId.replace(/\s+/g, '')}`);
  if (!modal) return console.error("Modal não encontrado:", modalId);

  // Pega a aba ativa (ficha ou livro)
  const abaAtiva = modal.querySelector('.aba-conteudo:not(.oculto)');
  if (!abaAtiva) return console.warn("Nenhuma aba ativa encontrada em:", modalId);

  // Busca o texto dentro da aba ativa
  const texto = abaAtiva.querySelector('.texto-historia');
  if (!texto) return console.warn("Nenhum texto encontrado na aba ativa em:", modalId);

  // Lê o tamanho atual da fonte
  let tamanhoAtual = parseFloat(window.getComputedStyle(texto).fontSize);
  let novoTamanho = tamanhoAtual + delta;

  // Define limites
  if (novoTamanho < 12) novoTamanho = 12;
  if (novoTamanho > 28) novoTamanho = 28;

  // Aplica suavemente
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
