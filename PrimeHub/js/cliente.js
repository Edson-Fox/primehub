document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-login');
  const emailInput = form.querySelector('#email-login');
  const senhaInput = form.querySelector('#senha-login');

  // Usuário e senha fixos para validação simples
  const usuarioValido = 'cliente@primehub.com';
  const senhaValida = '123456';

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validação do formulário HTML5
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    // Verifica se o usuário e senha batem com os fixos
    if (emailInput.value === usuarioValido && senhaInput.value === senhaValida) {
      alert('Login efetuado com sucesso!');
      form.reset();
      form.classList.remove('was-validated');
      // Redirecionar para página protegida
      window.location.href = 'dashboard.html';
    } else {
      alert('Usuário ou senha incorretos. Tente novamente.');
    }
  });
});
