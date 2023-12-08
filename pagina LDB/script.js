<<<<<<< HEAD
// JavaScript para navegação suave entre as seções
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
=======
// JavaScript para navegação suave entre as seções
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
>>>>>>> 54e54add8dadbf22b919baf2f257254bfc4fbd6d
});