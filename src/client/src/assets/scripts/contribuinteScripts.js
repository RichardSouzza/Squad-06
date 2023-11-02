export function addRedBorders() {
    const tableCell = document.querySelectorAll('tbody td')[0];
    const cellStyle = window.getComputedStyle(tableCell);
    const redBorderHeight = `calc(${cellStyle.height} - ${cellStyle.paddingTop} / 2)`;
    const tableRows = document.getElementsByClassName('dam-row');
    for (let row of tableRows) {
        const leftBorder = document.createElement('div');
        leftBorder.className = 'red-border';
        leftBorder.style.height = redBorderHeight;
        leftBorder.style.left = '0.5rem';
        row.appendChild(leftBorder);
        const rightBorder = document.createElement('div');
        rightBorder.className = 'red-border';
        rightBorder.style.height = redBorderHeight;
        rightBorder.style.right = '0.5rem';
        row.appendChild(rightBorder);
    }
}


export function addRedirects() {
    const tableAnchors = document.getElementsByClassName('table-anchor');
    for (let anchor of tableAnchors) {
        anchor.addEventListener('click', () => { window.location.href = 'client/dam' });
    }
}
