// script.js

// Adicionar um ouvinte de eventos para verificar a tecla "Enter" no campo de senha
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
  
    if (passwordInput) {
        passwordInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                login();
            }
        });
    }
});

// Função para realizar o login
async function login() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
   
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
  
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        alert('Login bem-sucedido!');
        localStorage.setItem('loggedInUser', JSON.stringify({ username, password }));
        window.location.href = 'meusite.html'; // Redirecionar para a página personalizada
      } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
      }
  
    } catch (error) {
      console.error('Erro ao realizar login:', error);
      alert('Erro ao realizar login. Tente novamente.');
    }
  
    // Limpar campos após o login (pode ser opcional)
    usernameInput.value = '';
    passwordInput.value = '';
}

// Verificar se há um usuário lembrado e preencher os campos de login
document.addEventListener('DOMContentLoaded', function() {
    const rememberedUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (rememberedUser) {
        // Definir os valores diretamente nos campos
        document.getElementById('username').value = rememberedUser.username;
        document.getElementById('password').value = rememberedUser.password;
    }
});

// Função para cadastrar usuário
function cadastrarUsuario() {
    // Obter os valores dos campos do formulário
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const enderecoInput = document.getElementById('endereco');
    const idadeInput = document.getElementById('idade');
    const sexoInput = document.getElementById('sexo');
    const novaSenhaInput = document.getElementById('novaSenha');

    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const endereco = enderecoInput.value.trim();
    const idade = idadeInput.value.trim();
    const sexo = sexoInput.value;
    const novaSenha = novaSenhaInput.value.trim();

    // Criar um objeto com os dados do usuário
    const novoUsuario = {
        nome,
        email,
        endereco,
        idade,
        sexo,
        senha: novaSenha // Alterar para 'senha' para corresponder à coluna no banco de dados
    };

    // Enviar os dados ao backend (usando uma API, AJAX, ou outra forma de comunicação)
    // Neste exemplo, utilizaremos o método fetch para simular a comunicação com um backend
    fetch('/cadastrar-usuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoUsuario)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        if (data.success) {
            // Redirecionar para a página personalizada após o cadastro bem-sucedido
            window.location.href = 'meusite.html';
        }
    })
    .catch(error => {
        console.error('Erro ao cadastrar usuário:', error);
    });
}
