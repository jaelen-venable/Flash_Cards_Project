function backgroundMusic() {
    let music = new Audio('Assets/Audio/creepy.mp3');
    music.loop = true;
    music.play();
    music.addEventListener('ended', () => {
        music.currentTime = 0;
        music.play();
    });
    // music.addEventListener('ended', () => {
    //     music.currentTime = 0;
    //     music.play();
    // });
}
function checkForVictory() {
    if (cardsArray.length === matchedCards.length); }