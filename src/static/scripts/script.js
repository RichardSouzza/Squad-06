function addRedBorders() {
    const body = document.getElementsByTagName('body')[0];
    console.log(body);
    const DAMs = document.getElementsByClassName('dam-row');
    for (let dam of DAMs) {
        const damRect = dam.getBoundingClientRect();
        const leftBorder = document.createElement('div');
        leftBorder.className = 'red-border';
        leftBorder.style.height = `calc(${damRect.height}px - 0.5rem)`
        leftBorder.style.left = `calc(${damRect.left}px + 0.5rem)`
        leftBorder.style.top = `calc(${damRect.top}px + 0.25rem)`
        body.appendChild(leftBorder);
        const rightBorder = document.createElement('div');
        rightBorder.className = 'red-border';
        rightBorder.style.height = `calc(${damRect.height}px - 0.5rem)`;
        rightBorder.style.left = `calc(${damRect.right}px - 0.75rem)`;
        rightBorder.style.top = `calc(${damRect.y}px + 0.25rem)`;
        body.appendChild(rightBorder);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        addRedBorders();
    }, 500);
});
