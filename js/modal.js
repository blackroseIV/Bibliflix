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

// ====================== FUNÇÕES ESPECIAIS: KAELIRA ======================

// Controle das abas
function mostrarAba(personagem, aba) {
  const todasAbas = document.querySelectorAll(`#modal${personagem} .aba`);
  const todosConteudos = document.querySelectorAll(`#modal${personagem} .aba-conteudo`);

  todasAbas.forEach(a => a.classList.remove('ativa'));
  todosConteudos.forEach(c => c.classList.add('oculto'));

  document.querySelector(`#modal${personagem} .aba[onclick*='${aba}']`).classList.add('ativa');
  document.getElementById(`${personagem}-${aba}`).classList.remove('oculto');
}

// Controle dos capítulos
let capituloAtualKaelira = 1;
function proximoCapitulo(personagem) {
  const atual = document.getElementById(`capitulo${personagem}${capituloAtualKaelira}`);
  const proximo = document.getElementById(`capitulo${personagem}${capituloAtualKaelira + 1}`);
  if (proximo) {
    atual.classList.add('oculto');
    proximo.classList.remove('oculto');
    capituloAtualKaelira++;
  }
}

function voltarCapitulo(personagem) {
  const atual = document.getElementById(`capitulo${personagem}${capituloAtualKaelira}`);
  const anterior = document.getElementById(`capitulo${personagem}${capituloAtualKaelira - 1}`);
  if (anterior) {
    atual.classList.add('oculto');
    anterior.classList.remove('oculto');
    capituloAtualKaelira--;
  }
}
