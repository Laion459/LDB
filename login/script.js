// Função para realizar o login
function login() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Recuperar usuários do localStorage
    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    // Verificar se o usuário e a senha são válidos
    const user = storedUsers.find(u => u.username === username && u.password === password);

    if (user) {
        alert('Login bem-sucedido!');

        // Salvar usuário no localStorage para lembrar
        localStorage.setItem('loggedInUser', JSON.stringify({ username, password }));

        window.location.href = 'meusite.html'; // Redirecionar para a página personalizada
    } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
    }

    // Limpar campos após o login (pode ser opcional)
    usernameInput.value = '';
    passwordInput.value = '';
}

// Adicionar um ouvinte de eventos para verificar a tecla "Enter" no campo de senha
document.getElementById('password').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        login();
    }
});

// Verificar se há um usuário lembrado e preencher os campos de login
document.addEventListener('DOMContentLoaded', function() {
    const rememberedUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (rememberedUser) {
        // Definir os valores diretamente nos campos
        document.getElementById('username').value = rememberedUser.username;
        document.getElementById('password').value = rememberedUser.password;
    }
});





// Função para cadastrar um novo usuário
function cadastrarUsuario() {
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

    // Recuperar usuários do localStorage
    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    // Verificar se o usuário já existe
    if (storedUsers.some(u => u.username === nome)) {
        alert('Usuário já registrado. Escolha um nome de usuário diferente.');
    } else {
        // Adicionar novo usuário à lista
        storedUsers.push({ username: nome, password: novaSenha });

        // Salvar usuários de volta no localStorage
        localStorage.setItem('registeredUsers', JSON.stringify(storedUsers));

        alert('Usuário cadastrado com sucesso! Redirecionando para o Meu Site.');
        
        // Redirecionar para a página personalizada após o cadastro
        window.location.href = 'meusite.html';
    }

    // Limpar campos após o cadastro (pode ser opcional)
    nomeInput.value = '';
    emailInput.value = '';
    enderecoInput.value = '';
    idadeInput.value = '';
    sexoInput.value = 'masculino';
    novaSenhaInput.value = '';


}
