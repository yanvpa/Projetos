// Inserção barra de navegação
const barraNavegacao = document.querySelector('nav');
const footer = document.querySelector('footer');
let pontoEndereco;

if (window.location.pathname.split('/').pop() === 'main.html') {
    pontoEndereco = '.';
} else {
    pontoEndereco = '..';
}

barraNavegacao.innerHTML = `
        <div class="nav__bar">

            <p class="catalogo__nav__tablet">CATALOGO</p>
            <i class='bx bx-menu'></i>
            
            <button id="btn__logout__descktop" onclick="logout()">Sair</button>
            <a href="${pontoEndereco}/main.html">
                <img class="logo__nav__bar" src="${pontoEndereco}/images/logo.png" alt="Logo Solução Balança"></a>
            <div class="nav__links">
                <div class="sider__logo__container">
                    <a href="${pontoEndereco}/main.html"><img class="sider__logo" src="${pontoEndereco}/images/logo.png" alt="Logo Solução Balança">
                    </a>
                    <i class='bx bx-x'></i>
                </div>

                <ul class="links">
                    <li>
                        <a href="${pontoEndereco}/pages_categorias/balancas.html">Balanças</a>
                        <i class='bx bxs-chevron-down arrow'></i>
                        <ul class="sub__menu">
                            <li><a href="${pontoEndereco}/pages_subcategorias/balanca_elgin.html">Elgin</a></li>
                            <li><a href="${pontoEndereco}/pages_subcategorias/balancas_gural.html">Gural</a></li>
                            <li><a href="${pontoEndereco}/pages_subcategorias/balancas_toledo.html">Toledo</a></li>
                            <li><a href="${pontoEndereco}/pages_subcategorias/balamcas_urano.html">Urano</a></li>
                            <li><a href="${pontoEndereco}/pages_subcategorias/balancas_welmy.html">Welmy</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="${pontoEndereco}/pages_categorias/embaladoras.html">Embaladoras</a>
                        <i class='bx bxs-chevron-down arrow'></i>
                        <ul class="sub__menu">
                            <li><a href="${pontoEndereco}/pages_subcategorias/embaladoras_baiao.html">R. Baião</a></li>
                            <li><a href="${pontoEndereco}/pages_subcategorias/embaladoras_sulpack.html">Sulpack</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="${pontoEndereco}/pages_categorias/fatiadores.html">Fatiadores</a>
                        <i class='bx bxs-chevron-down arrow'></i>
                        <ul class="sub__menu">
                            <li><a href="${pontoEndereco}/pages_subcategorias/fatiadores_arbel.html">Arbel</a></li>
                            <li><a href="${pontoEndereco}/pages_subcategorias/fatiadores_gural.html">Gural</a></li>
                            <li><a href="${pontoEndereco}/pages_subcategorias/fatiadores_toledo.html">Toledo</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="${pontoEndereco}/pages_categorias/liquidificadores.html">Liquidificadores</a>
                        <i class='bx bxs-chevron-down arrow'></i>
                        <ul class="sub__menu">
                            <li><a href="${pontoEndereco}/pages_subcategorias/liquidificadores_colombo.html">Colombo</a></li>
                            <li><a href="${pontoEndereco}/pages_subcategorias/liquificadores_metvisa.html">Metvisa</a></li>
                            <li><a href="${pontoEndereco}/pages_subcategorias/liquidificadores_skymsen.html">Skymsen</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="${pontoEndereco}/pages_categorias/moedores.html">Moedores</a>
                        <i class='bx bxs-chevron-down arrow'></i>
                        <ul class="sub__menu">
                            <li><a href="${pontoEndereco}/pages_subcategorias/moedores_arbel.html">Arbel</a></li>
                            <li><a href="${pontoEndereco}/pages_subcategorias/moedores_botini.html">Botini</a></li>
                            <li><a href="${pontoEndereco}/pages_subcategorias/moedores_gural.html">Gural</a></li>
                            <li><a href="${pontoEndereco}/pages_subcategorias/moedores_skymsen.html">Skymsen</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="${pontoEndereco}/pages_categorias/processadores.html">Processadores</a>
                        <i class='bx bxs-chevron-down arrow'></i>
                        <ul class="sub__menu">
                            <li><a href="${pontoEndereco}/pages_subcategorias/processadores_becker.html">Becker</a></li>
                            <li><a href="${pontoEndereco}/pages_subcategorias/processadores_skymsen.html">Skymsen</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="${pontoEndereco}/pages_categorias/raladores.html">Ralador Yole</a>
                    </li>
                    <li>
                        <a href="${pontoEndereco}/pages_categorias/seladoras.html">Seladoras</a>
                        <i class='bx bxs-chevron-down arrow'></i>
                        <ul class="sub__menu">
                            <li><a href="${pontoEndereco}/pages_subcategorias/seladoras_becker.html">Becker</a></li>
                            <li><a href="${pontoEndereco}/pages_subcategorias/seladoras_skymsen.html">Skymsen</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="${pontoEndereco}/pages_categorias/serrasFitas.html">Serras Fita</a>
                        <i class='bx bxs-chevron-down arrow'></i>
                        <ul class="sub__menu">
                            <li><a href="${pontoEndereco}/pages_subcategorias/serrasfita_botini.html">Botini</a></li>
                            <li><a href="${pontoEndereco}/pages_subcategorias/serrasfita_metvisa.html">Metvisa</a></li>
                        </ul>
                    </li>
                </ul>

                <button id="btn__logout" onclick="logout()">Sair</button>

            </div>

            <div class="search__box">
                <i class='bx bx-search'></i>
                <div class="input__box">
                    <input type="text" placeholder="Pesquise...">
                </div>
            </div>

        </div>
`;

footer.innerHTML = `
        <div class="footer__container">
            <div class="footer__links__container">
                <h1 class="footer__titulo">Navegação</h1>
                <ul class="footer__links">
                    <li><a href="${pontoEndereco}/pages_categorias/balancas.html">Balanças</a></li>
                    <li><a href="${pontoEndereco}/pages_categorias/embaladoras.html">Embaladoras</a></li>
                    <li><a href="${pontoEndereco}/pages_categorias/fatiadores.html">Fatiadores</a></li>
                    <li><a href="${pontoEndereco}/pages_categorias/liquidificadores.html">Liquidificadores</a></li>
                    <li><a href="${pontoEndereco}/pages_categorias/moedores.html">Moedores</a></li>
                    <li><a href="${pontoEndereco}/pages_categorias/processadores.html">Processadores</a></li>
                    <li><a href="${pontoEndereco}/pages_categorias/raladores.html">Raladores</a></li>
                    <li><a href="${pontoEndereco}/pages_categorias/seladoras.html">Seladoras</a></li>
                    <li><a href="${pontoEndereco}/pages_categorias/serrasFitas.html">Serras Fitas</a></li>
                </ul>
            </div>
            <div class="footer__contact">
                <a href="tel:556192284400" target="_blank"><i class="ri-phone-fill"></i> (61) 99228-4400</a>
                <a href="mailto:sos_balancas@outlook.com" target="_blank"><i class="ri-mail-fill"></i> sos_balancas@outlook.com</a>
                <a href="https://www.google.com/maps/place/Solução+Balanças/@-15.8280153,-48.1231515,15z/data=!4m6!3m5!1s0x935bcd0e30f8e2b7:0x6066e08f06b552f3!8m2!3d-15.8280153!4d-48.1231515!16s%2Fg%2F11tfkljbvh?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"><i class="ri-map-pin-5-fill"></i> SHSN CHÁCARA 11 LOTE 02 LOJA 01,
                    Ceilândia Sul - Ceilândia, Brasília - DF,
                    72236-800</a>
            </div>
        </div>
        <div class="footer__bottom">
            <p>© 2024 Solução Balanças. <br>Todos os direitos reservados.</p>
        </div>
`;

// Open/Close sidebar
let menuOpenBtn = document.querySelector('.nav__bar .bx-menu');
let menuOpenCatalogo = document.querySelector('.nav__bar .catalogo__nav__tablet');
let closeOpenBtn = document.querySelector('.nav__links .sider__logo__container .bx-x');
let navLinks = document.querySelector('.nav__links');

menuOpenCatalogo.addEventListener('click', () => {

    if (boxInput.classList.contains('show__input')) return;

    navLinks.style.left = '0';
    document.body.style.overflow = 'hidden'; // Impede o scroll no body
});

menuOpenBtn.addEventListener('click', () => {

    if (boxInput.classList.contains('show__input')) return;

    navLinks.style.left = '0';
    document.body.style.overflow = 'hidden'; // Impede o scroll no body
});

closeOpenBtn.addEventListener('click', () => {
    navLinks.style.left = '-100%';
    document.body.style.overflow = 'auto'; // Libera o scroll no body
})

navLinks.addEventListener('click', function (event) {
    if (event.target.classList.contains('arrow')) {
        const arrow = event.target;
        const menu = event.target.parentElement; // pega o li
        const subMenu = menu.querySelector('.sub__menu');

        if (subMenu.classList.contains('show__submenu')) {
            subMenu.classList.remove('show__submenu');
            arrow.style.transform = 'rotate(0deg)'; // adiciona/tira a classe rotate
        } else {
            subMenu.classList.toggle('show__submenu');
            arrow.style.transform = 'rotate(180deg)';
        }
    }
});

// Barra de pesquisa
let btnPesquisa = document.querySelector('.search__box i');
let boxInput = document.querySelector('.input__box');

btnPesquisa.addEventListener('click', () => {

    // o getComputedStyle pega o valor presente no css
    if (getComputedStyle(navLinks).left === '0px') return;

    boxInput.classList.toggle('show__input');

    if (btnPesquisa.classList.contains('bx-search')) {
        btnPesquisa.classList.replace('bx-search', 'bx-x');
        btnPesquisa.style.transform = 'rotate(180deg)';
    } else {
        btnPesquisa.classList.replace('bx-x', 'bx-search');
        btnPesquisa.style.transform = 'rotate(0deg)'
    }

});

// Dropdown descktop
function habilitarHoverParaDesktop() {
    // Só aplica para telas grandes
    if (window.innerWidth >= 1025) {
        const itensMenu = document.querySelectorAll('.links > li');

        itensMenu.forEach((item) => {
            const subMenu = item.querySelector('.sub__menu');

            if (subMenu) {
                item.addEventListener('mouseenter', () => {
                    subMenu.classList.add('show__submenu');
                });

                item.addEventListener('mouseleave', () => {
                    subMenu.classList.remove('show__submenu');
                });
            }
        });
    }
}

window.addEventListener('DOMContentLoaded', habilitarHoverParaDesktop);
window.addEventListener('resize', () => {
    // Atualiza a página se mudar o tamanho da janela (simples e eficaz para seu caso)
    location.reload();
});
