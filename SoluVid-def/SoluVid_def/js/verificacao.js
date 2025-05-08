// Lista de usuários cadastrados

const usuarios = [
    { usuario: "admin", senha: "13579" },
    { usuario: "admin2", senha: "123" }
]

const btnLogin = document.getElementById('btn__login');

senha.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        login();
    }
});

username.addEventListener('focus', () => {
    setTimeout(() =>{
        username.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
});

senha.addEventListener('focus', () => {
    setTimeout(() =>{
        senha.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
});

// Função de login
function login() {
    let username = document.getElementById('username').value;
    let senha = document.getElementById('senha').value;
    let mensagemErro = document.getElementById('mensagem__erro');

    // Verificando se o usuário e senha existem na lista
    let usuarioEncontrado = usuarios.find(u => u.usuario === username && u.senha === senha);

    if (usuarioEncontrado) {
        localStorage.setItem("usuarioLogado", username); // Salva o usuário logado
        alert('Login bem-sucedido!');
        window.location.href = "main.html"
    } else {
        mensagemErro.style.visibility = 'visible';
        document.getElementById('username').value = '';
        document.getElementById('senha').value = '';
    }


}

btnLogin.addEventListener('click', function() {
    login();
});

// ⚠ Proteção contra inspeção
document.addEventListener("contextmenu", event => event.preventDefault()); // Bloqueia botão direito
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && (event.key === "u" || event.key === "U" || event.key === "s" || event.key === "S")) {
        event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.key === "I") {
        event.preventDefault();
    }
    if (event.key === "F12") {
        event.preventDefault();
    }
});

// Bloqueia o console do navegador
setInterval(() => {
    console.log = function () { };
    console.warn = function () { };
    console.error = function () { };
}, 1000);
