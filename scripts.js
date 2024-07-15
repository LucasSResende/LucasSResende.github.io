document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.cv-nav').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const conteudo = document.getElementById('conteudo');
      fetch(link.getAttribute('href'))
        .then(response => response.text())
        .then(html => {
          conteudo.innerHTML = html;

          document.querySelectorAll('.project-image').forEach(image => {
            image.addEventListener('click', function() {
              const modal = document.createElement('div');
              modal.classList.add('modal');

              const modalContent = document.createElement('div');
              modalContent.classList.add('modal-content');

              const img = document.createElement('img');
              img.src = image.src;
              modalContent.appendChild(img);

              const closeBtn = document.createElement('span');
              closeBtn.classList.add('close');
              closeBtn.innerHTML = '&times;';
              closeBtn.onclick = function() {
                modal.style.display = 'none';
                modal.remove();
              };

              modal.appendChild(closeBtn);
              modal.appendChild(modalContent);
              document.body.appendChild(modal);
              modal.style.display = 'block';
            });
          });
        })
        .catch(error => console.error('Erro ao carregar o conteúdo:', error));
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        document.getElementById('nomeError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('mensagemError').textContent = '';

        // Obter valores dos campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        let isValid = true;
        if (nome === '') {
            document.getElementById('nomeError').textContent = "O campo 'Nome Completo' não pode estar em branco";
            isValid = false;
        }
        if (email === '') {
            document.getElementById('emailError').textContent = "O campo 'Email' não pode estar em branco";
            isValid = false;
        }
        if (mensagem === '') {
            document.getElementById('mensagemError').textContent = "O campo 'Mensagem' não pode estar em branco";
            isValid = false;
        }

        if (isValid) {
            feedback.textContent = "Sua mensagem foi enviada com sucesso. Logo entrarei em contato retornando!";
        } else {
            feedback.textContent = ''; 
        }
    });
});

