// ===============================
// 🧩 CARREGAMENTO DINÂMICO DE COMPONENTES
// ===============================

// Função genérica para carregar qualquer componente HTML
async function carregarComponente(seletorId, caminho, append = false) {
  try {
    const resposta = await fetch(caminho);
    if (!resposta.ok) throw new Error(`Erro ao carregar ${caminho}`);
    const html = await resposta.text();

    const container = document.getElementById(seletorId);
    if (!container) {
      console.warn(`Container não encontrado: ${seletorId}`);
      return;
    }

    // Se append = true, adiciona sem apagar o conteúdo anterior
    if (append) {
      container.insertAdjacentHTML("beforeend", html);
    } else {
      container.innerHTML = html;
    }

    console.log(`✅ Componente carregado: ${caminho}`);
  } catch (erro) {
    console.error("❌ Falha ao carregar componente:", caminho, erro);
  }
}

// ===============================
// 🔹 COMPONENTES PRINCIPAIS
// ===============================
carregarComponente("header-container", "components/header.html");
carregarComponente("top10-container", "components/top10.html");
carregarComponente("romance-container", "components/classe-romance.html");
carregarComponente("rpg-container", "components/classe-rpg.html");

// ===============================
// 📘 MODAIS DAS HISTÓRIAS
// ===============================
window.addEventListener("DOMContentLoaded", async () => {
  await carregarComponente("modal-container", "components/stories/modal-kaelira.html");
  await carregarComponente("modal-container", "components/stories/modal-Nyara-penumbra.html", true);
  console.log("📚 Todos os modais foram carregados com sucesso!");
});
