// Ouvrir et fermer le menu avec l'icône hamburger
document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('open');
});

// Détection des gestes de balayage sur les appareils tactiles
let startX;

document.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
}, false);

document.addEventListener('touchend', function(e) {
    let endX = e.changedTouches[0].clientX;
    handleSwipe(startX, endX);
}, false);

function handleSwipe(startX, endX) {
    let threshold = 50; // Seuil pour détecter un geste de balayage significatif
    if (endX < startX - threshold) {
        showNextContent(); // Balayage vers la gauche
    } else if (endX > startX + threshold) {
        showPreviousContent(); // Balayage vers la droite
    }
}

// Gestion des flèches de navigation pour ordinateur
document.getElementById('left-arrow').addEventListener('click', showPreviousContent);
document.getElementById('right-arrow').addEventListener('click', showNextContent);

// Gestion de l'ouverture du jeu
document.getElementById('start-game').addEventListener('click', function() {
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('game').classList.remove('hidden');
    startGame();
});

// Gestion du redémarrage du jeu
document.getElementById('restart-game').addEventListener('click', function() {
    startGame();
});

function showNextContent() {
    let contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <div class="logo">
            <h1>Prochain Contenu</h1>
        </div>
        <div class="search-box">
            <input type="text" placeholder="Rechercher...">
        </div>
        <div class="menu-buttons">
            <p>Voici le prochain contenu. Balayez ou cliquez sur la flèche gauche pour revenir.</p>
        </div>`;
}

function showPreviousContent() {
    let contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <div class="logo">
            <h1>Starfall Defender</h1>
        </div>
        <div class="search-box">
            <input type="text" placeholder="Re
