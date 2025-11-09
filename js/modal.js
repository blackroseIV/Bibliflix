// ===============================
// 📘 SISTEMA DE MODAIS
// ===============================

// 🔹 Abre o modal com base no nome (ex: "Kaelira" ou "NyaraPenumbra")
function abrirModal(nome) {
  const id = `modal${nome.replace(/\s+/g, '')}`; // Remove espaços, caso existam
  const modal = document.getElementById(id);

  if (!modal) {
    console.error("Modal não encontrado:", id);
    return;
  }

  modal.style.display = 'flex'; // Usa 'flex' para centralizar o conteúdo
  document.body.style.overflow = 'hidden'; // Impede rolagem do fundo
}

// 🔹 Fecha o modal
function fecharModal(nome) {
  const id = `modal${nome.replace(/\s+/g, '')}`;
  const modal = document.getElementById(id);

  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaura rolagem
  }
}

// 🔹 Fecha modal ao clicar fora do conteúdo
window.addEventListener('click', function (event) {
  const modais = document.querySelectorAll('.modal');
  modais.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});
