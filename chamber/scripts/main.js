const menuButton = document.querySelector('#menuButton');

menuButton.addEventListener('click', function() {
    toggleMenu();
});


function toggleMenu() {
    const navElement = document.querySelector('#primaryNav');
    navElement.classList.toggle('open');
    document.querySelector('#menuButton').classList.toggle("open");
}
