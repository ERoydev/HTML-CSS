const inputBar = document.querySelector('.rangeBar');
const container = document.querySelector('.container');
const info = document.querySelector('.information');

inputBar.addEventListener('mouseup', (e) => {
    const widthChosen = e.target.value;
    container.style.width = `${widthChosen}px`;
    info.innerHTML = `Container Width = ${widthChosen}px`;

})