function abrirModal(id) {
  const modal = document.getElementById('modal' + id);
  if (modal) {
    modal.style.display = 'block';
  }
}

function fecharModal(id) {
  const modal = document.getElementById('modal' + id);
  if (modal) {
    modal.style.display = 'none';
  }
}

  function abrirModal(id) {
  const modal = document.getElementById('modal' + id);
  if (modal) {
    modal.style.display = 'block';
  }
}

function abrirModal(id) {
  const modal = document.getElementById('modal' + id);
  if (modal) {
    modal.style.display = 'block';
  } else {
    console.log("Modal não encontrado: modal" + id);
  }
}

function abrirModal(nome) {
  const modal = document.getElementById(`modal${nome}`);
  if (!modal) {
    console.error("Modal não encontrado:", `modal${nome}`);
    return;
  }
  modal.style.display = 'flex';
}

function fecharModal(nome) {
  const modal = document.getElementById(`modal${nome}`);
  if (modal) {
    modal.style.display = 'none';
  }
}

function abrirModal(nome) {
  const id = `modal${nome.replace(/\s+/g, '')}`; // remove espaços
  const modal = document.getElementById(id);
  if (!modal) {
    console.error("Modal não encontrado:", id);
    return;
  }
  modal.style.display = 'flex';
}

