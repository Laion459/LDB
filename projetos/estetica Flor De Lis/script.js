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


    // Initialize variables
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-indicators button');
    const totalSlides = slides.length;
    const intervalTime = 3000; // Intervalo de 3 segundos

    // Function to show a specific slide
    function showSlide(index) {
        slides.forEach((slide) => slide.classList.remove("active"));
        slides[index].classList.add("active");

        dots.forEach((dot) => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    // Function to show the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Function to show the previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Function to set the current slide
    function setCurrentSlide(index) {
        currentSlide = index - 1;
        showSlide(currentSlide);
    }

    // Set interval for auto-sliding
    setInterval(nextSlide, intervalTime);
    showSlide(currentSlide);

    // Event listeners for next and previous buttons
    document.querySelector('.carousel-control-prev').addEventListener('click', prevSlide);
    document.querySelector('.carousel-control-next').addEventListener('click', nextSlide);

    // Event listeners for indicator buttons
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            setCurrentSlide(index);
        });
    });

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
