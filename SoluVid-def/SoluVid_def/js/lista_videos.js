// Lista dos vídeos do site
const listaVideos = [

    // {
    //     titulo: "",
    //     equipamento: "",
    //     marca: "",
    //     id: "",
    // },

    {
        titulo: "Conserto bobina balança",
        equipamento: "Balança Prix 5",
        marca: "Toledo",
        id: "001",
    },

    {
        titulo: "Conserto celula de carga balança",
        equipamento: "Balança DP1502",
        marca: "Elgin",
        id: "002",
    }

]

// Função para ordenar a lista em orgem alfabetica pelo titulo
listaVideos.sort((a, b) => {
    const tituloA = a.titulo.toUpperCase(); // Conver par maiúculo, para evitar problemas
    const tituloB = b.titulo.toUpperCase();

    if (tituloA < tituloB) {
        return -1; // "a" vem antes de "b"
    }
    if (tituloA > tituloB) {
        return 1; // "b" vem antes de "a"
    }
    return 0; // nome iguais
})

// Função de mostrar card vídeos
const cardsPorPagina = 20;
let paginaAtual = 1;

function mostrarVideos(pagina) {
    const secaoCardTitulo = document.querySelector('.titulo__container__cards').textContent.trim().toLowerCase();
    const pontoEndereco = secaoCardTitulo === 'home' || window.location.pathname.includes("pesquisa");

    let videosFiltrados;

    if (secaoCardTitulo === 'home') {
        videosFiltrados = listaVideos.filter(video => 
            video.equipamento != ''
        );
    } else {

        const filtroSubcategoria = secaoCardTitulo.split(" ");

        videosFiltrados = listaVideos.filter(video =>
            (
                video.equipamento.toLowerCase().includes(secaoCardTitulo) ||
                video.marca.toLowerCase().includes(secaoCardTitulo)
            ) || (
                video.equipamento.toLowerCase().includes(filtroSubcategoria[0]) &&
                video.marca.toLowerCase().includes(filtroSubcategoria[1])
            )
        );
    }

    const totalVideos = videosFiltrados.length;
    const inicio = (pagina - 1) * cardsPorPagina;
    const fim = inicio + cardsPorPagina;
    const videosParaMostrar = videosFiltrados.slice(inicio, fim);

    const secaoCard = document.querySelector('.container__cards');
    secaoCard.innerHTML = ''; // Limpa a seção antes de adicionar novos produtos

    if (videosFiltrados.length === 0) {
        secaoCard.innerHTML = '<p>Nenhum produto encontrado.</p>';
        return;
    }

    videosParaMostrar.forEach(video => {
        const caminhoBase = pontoEndereco ? "." : ".." // Define o caminho correto

        secaoCard.innerHTML += `
            <div class="card">
                <a class="card__link" href="${caminhoBase}/pages/${video.id}.html">
                    <img class="card__img__video" src="${caminhoBase}/images_videos/${video.id}.png"
                    alt="Tumb vídeos tutoriais">
                    <h2 class="card__title">${video.titulo}</h2>
                    <div class="container__cards__info">
                        <p class="card__equipamento">${video.equipamento}</p>
                        <p class="card__marca">Marca: ${video.marca}</p>
                        <p class="card__id">cod: ${video.id}</p>
                    </div>
                </a>
            </div>
        `;

    })

    // Atualiza a paginação corretamente
    gerarPaginacao(pagina, totalVideos);
}

// Atualiza a paginação corretamente com base nos produtos filtrados
function gerarPaginacao(pagina, totalVideos) {
    const totalPaginas = Math.ceil(totalVideos / cardsPorPagina);
    const secaoPaginacao = document.querySelector('.paginacao');
    secaoPaginacao.innerHTML = '';

    if (totalPaginas <= 1) return;

    const botaoAnterior = document.createElement('button');
    botaoAnterior.classList.add('btn__pagination');
    botaoAnterior.innerHTML = '<i class="ri-arrow-left-double-line"></i>';
    botaoAnterior.disabled = pagina === 1;
    botaoAnterior.addEventListener('click', () => {
        mostrarVideos(pagina - 1);
        moveTela();
    });
    secaoPaginacao.appendChild(botaoAnterior);

    for (let i = 1; i <= totalPaginas; i++) {
        const botaoPagina = document.createElement('button');
        botaoPagina.classList.add('btn__pagination');
        botaoPagina.textContent = i;
        if (i === pagina) botaoPagina.classList.add('ativo');
        botaoPagina.addEventListener('click', () => {
            mostrarVideos(i);
            moveTela();
        });
        secaoPaginacao.appendChild(botaoPagina);
    }

    const botaoProximo = document.createElement('button');
    botaoProximo.classList.add('btn__pagination');
    botaoProximo.innerHTML = '<i class="ri-arrow-right-double-line"></i>';
    botaoProximo.disabled = pagina === totalPaginas;
    botaoProximo.addEventListener('click', () => {
        mostrarVideos(pagina + 1);
        moveTela();
    });
    secaoPaginacao.appendChild(botaoProximo);

}

// Codificação da barra de pesquisa
const inputPesquisa = document.querySelector('.input__box input');

if (inputPesquisa) {
    inputPesquisa.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            pesquisarProdutos();
        }
    });
}

function pesquisarProdutos() {
    const termoPesquisa = inputPesquisa.value.trim().toLowerCase();
    if (termoPesquisa === '') return;

    localStorage.setItem('termoPesquisa', termoPesquisa);
    const estaNaHome = window.location.pathname === '/' || window.location.pathname.endsWith('/main.html') || window.location.pathname.endsWith('/');
    window.location.href = estaNaHome ? './pesquisa.html' : '../pesquisa.html';
}

if (window.location.pathname.includes('pesquisa.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        const termoPesquisa = localStorage.getItem('termoPesquisa') || '';
        if (termoPesquisa && inputPesquisa) {
            inputPesquisa.value = termoPesquisa;
            executarPesquisa(termoPesquisa);
        }
    });
}

function executarPesquisa(termoPesquisa) {
    const videosFiltrados = listaVideos.filter(video =>
        video.titulo.toLowerCase().includes(termoPesquisa) ||
        video.id.toLowerCase().includes(termoPesquisa) ||
        video.equipamento.toLowerCase().includes(termoPesquisa) ||
        video.marca.toLowerCase().includes(termoPesquisa)
    );

    document.querySelector('.titulo__container__cards').textContent = termoPesquisa || 'Pesquisa';

    const secaoCard = document.querySelector('.container__cards');
    secaoCard.innerHTML = '';

    if (videosFiltrados.length === 0) {
        secaoCard.innerHTML = `<p>Nenhum vídeo encontrado.</p>`;
        document.querySelector('.paginacao').innerHTML = '';
        return;
    }

    videosFiltrados.forEach(video => {
        secaoCard.innerHTML += `
            <div class="card">
                <a class="card__link" href="../pages/${video.id}.html">
                    <img class="card__img__video" src="../images_videos/${video.id}.png" alt="Tumb vídeos tutoriais">
                    <h2 class="card__title">${video.titulo}</h2>
                    <div class="container__cards__info">
                        <p class="card__equipamento">${video.equipamento}</p>
                        <p class="card__marca">Marca: ${video.marca}</p>
                        <p class="card__id">cod: ${video.id}</p>
                    </div>
                </a>
            </div>
        `;
    });

    const paginationPesquisa = document.querySelector('.paginacao');
    paginationPesquisa.style.display = 'none';
}

mostrarVideos(1);