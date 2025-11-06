fetch('components/header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('header-container').innerHTML = html;
  });

fetch('components/top10.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('top10-container').innerHTML = html;
  });

fetch('components/classe-romance.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('romance-container').innerHTML = html;
  });

fetch('components/classe-rpg.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('rpg-container').innerHTML = html;
  });

fetch('components/stories/modal-kaelira.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('modal-container').innerHTML = html;
  });

fetch('components/stories/modal-Nyara-penumbra.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('modal-container').innerHTML += html;
  });
