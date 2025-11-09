// ===============================
// 🧩 CARREGAMENTO DINÂMICO DE COMPONENTES
// ===============================

// Função genérica para carregar qualquer componente
function carregarComponente(seletor, caminho, append = false) {
  fetch(caminho)
    .then(res => {
      if (!res.ok) throw new Error(`Erro ao carregar ${caminho}`);
      return res.text();
    })
    .then(html => {
      const container = document.getElementById(seletor);
      if (!container) {
        console.warn(`Container não encontrado: ${seletor}`);
        return;
      }

      // append = true → adiciona sem apagar o conteúdo anterior
      container.innerHTML = append ? container.innerHTML + html : html;
    })
    .catch(err => console.error(err));
}

// ===============================
// 🔹 COMPONENTES PRINCIPAIS
// ===============================
carregarComponente('header-container', 'components/header.html');
carregarComponente('top10-container', 'components/top10.html');
carregarComponente('romance-container', 'components/classe-romance.html');
carregarComponente('rpg-container', 'components/classe-rpg.html');

// ===============================
// 📘 MODAIS DAS HISTÓRIAS
// ===============================
carregarComponente('modal-container', 'components/stories/modal-kaelira.html');
carregarComponente('modal-container', 'components/stories/modal-Nyara-penumbra.html', true);
