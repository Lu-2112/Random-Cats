const catImage = document.getElementById('cat-image');
const errorMessage = document.getElementById('error-message');

fetch('https://cataas.com/cat?json=true')
  .then(response => response.json())
  .then(data => {
    catImage.src = `https://cataas.com/cat/${data.id}`;
  })
  .catch(error => {
    errorMessage.textContent = 'Não foi possível carregar a imagem do gatinho 😿';
    console.error(error);
  });
  