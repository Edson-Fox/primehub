// contato.js
//
// Validação simples e feedback do formulário de contato PrimeHub.

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contato');
  const msgSucesso = document.getElementById('msg-sucesso');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validação simples: todos os campos são required pelo HTML5
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    // Se válido, mostrar mensagem de sucesso
    msgSucesso.classList.remove('d-none');

    // Limpar formulário e classes de validação
    form.reset();
    form.classList.remove('was-validated');
  });
});

msgSucesso.classList.remove('d-none');
setTimeout(() => {
  msgSucesso.classList.add('d-none');
}, 5000); // esconde após 5 segundos
// Exibir mensagem de sucesso após o envio do formulário
