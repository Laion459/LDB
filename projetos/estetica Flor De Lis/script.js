document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.querySelector('.menu-toggle'); // Alterado o seletor para '.menu-toggle'
    var nav = document.querySelector('nav');
    var labelToggle = document.querySelector('label[for="menu-toggle"]');
    var logoLink = document.querySelector('.logo a'); // Alterado para '.logo a' para selecionar o link dentro da classe logo

    // Ajuste para clicar no ícone do menu
    labelToggle.addEventListener('click', function () {
        nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
    });

    // Adicione um evento de clique ao link do logo
    logoLink.addEventListener('click', function () {
        nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
    });

    function toggleLogoVisibility() {
        var logoImage = document.getElementById('logo-image');
        logoImage.classList.toggle('hide-logo');
    }

    // Fechar o menu ao clicar fora dele
    document.addEventListener('mouseup', function (e) {
        var menu = document.querySelector('.menu');
        if (!menu.contains(e.target) && !nav.contains(e.target)) {
            menuToggle.checked = false;
            nav.style.display = 'none';
        }
    });

    // Fechar o menu ao redimensionar a tela
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            menuToggle.checked = false;
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    });

    // Fechar o menu ao clicar nos itens do menu
    var menuItems = document.querySelectorAll('.menu a');
    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            menuToggle.checked = false;
            nav.style.display = 'none';
        });
    });

    // Fechar o menu ao clicar no label (botão do menu)
    labelToggle.addEventListener('click', function () {
        menuToggle.checked = !menuToggle.checked;
        nav.style.display = menuToggle.checked ? 'flex' : 'none';
    });

    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".dots");

    function showSlide(index) {
        slides.forEach((slide) => slide.classList.remove("show"));
        slides[index].classList.add("show");

        dots.forEach((dot) => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function setCurrentSlide(index) {
        currentSlide = index - 1;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 8000);
    showSlide(currentSlide);

    // Mapa OpenLayers
    var endereco = [-27.445827309755046, -48.37738612381911];

    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            }),
            new ol.layer.Vector({
                source: new ol.source.Vector({
                    features: [new ol.Feature({
                        geometry: new ol.geom.Point(ol.proj.fromLonLat([endereco[1], endereco[0]]))
                    })]
                }),
                style: new ol.style.Style({
                    image: new ol.style.Icon({
                        anchor: [0.5, 1],
                        src: 'https://openlayers.org/en/latest/examples/data/icon.png'
                    })
                })
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([endereco[1], endereco[0]]),
            zoom: 15
        })
    });
});
