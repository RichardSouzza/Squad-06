export function addRedirects() {
    const tableAnchors = document.getElementsByClassName('table-anchor');
    for (let anchor of tableAnchors) {
        anchor.addEventListener('click', () => { window.location.href = 'client/dam' });
    }
}
