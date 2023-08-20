const showButton = document.getElementById('moreButton');
const hiddenButton = document.getElementById('boutButton');

showButton.addEventListener('click', () => {
    hiddenButton.style.display = 'block';
});