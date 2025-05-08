// Verifica se o usuário está autenticado
let usuarioLogado = localStorage.getItem("usuarioLogado");

let pontoEnderecoSaida;

if (window.location.pathname.split('/').pop() === 'main.html') {
    pontoEnderecoSaida = '.';
} else {
    pontoEnderecoSaida = '..';
}

if (!usuarioLogado) {
    window.location.href = `${pontoEnderecoSaida}/index.html`; // Redireciona para o login caso não esteja autenticado
}

function logout() {
    localStorage.removeItem("usuarioLogado"); // Remove a autenticação de login do usuário
    window.location.href = `${pontoEnderecoSaida}/index.html`;
}

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